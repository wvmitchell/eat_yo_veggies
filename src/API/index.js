


export const getVeggies = async () => {
  const response = await fetch('http://localhost:3001/veggies')
  if(response.ok) {
    return await response.json()
  } else {
    throw new Error('Response was not ok')
  }
}




