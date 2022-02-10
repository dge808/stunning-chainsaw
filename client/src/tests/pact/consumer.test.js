import { Matchers } from '@pact-foundation/pact'
import { pactWith } from 'jest-pact'
import { getDogs } from '../../api'
import { DOGS_LIST } from '../mocks/dogsApi'
const { eachLike } = Matchers

pactWith(
  {
    consumer: 'DogsClient Example',
    provider: 'DogsApi Example',
    log: 'src/tests/pact/logs',
    dir: 'src/tests/pact/pacts',
  },
  provider => {
    describe('Dogs Api', () => {
      beforeAll(() => {
        return provider.addInteraction({
          state: 'there are dogs',
          uponReceiving: 'a request for dogs',
          withRequest: {
            path: '/dogs',
            method: 'GET',
          },
          willRespondWith: {
            body: eachLike(DOGS_LIST[0]),
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          },
        })
      })

      it('will receive the list of dogs with certain fields', async () => {
        const result = await getDogs(provider.mockService.baseUrl)
        expect(result).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              breed: expect.any(String),
              name: expect.any(String),
              sex: expect.any(String),
              tail: expect.any(Array),
            }),
          ])
        )
      })
    })
  }
)
