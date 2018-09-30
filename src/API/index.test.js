import * as API from './index'

describe('API', () => {
  describe('getVeggies', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(['broccoli', 'kale'])
      }))
    })

    it('should call fetch with the correct params', () => {
      // Setup
      const url = 'http://localhost:3001/veggies'

      // Execution
      API.getVeggies()

      // Expectation
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should return data if everything works', async () => {
      // Execution
      const result = await API.getVeggies()

      // Expectation
      expect(result).toEqual(['broccoli', 'kale'])
    })

    it('should throw an error if something went wrong', async () => {
      // Setup
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
      }))

      // Execution && Expectation
      await expect(API.getVeggies()).rejects.toEqual(Error('Response was not ok'))
    })

  })
})
