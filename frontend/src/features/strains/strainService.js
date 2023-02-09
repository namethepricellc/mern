import axios from 'axios'

const API_URL = '/api/strains'

// Create a new strain
const createStrain = async (strainData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(API_URL, strainData, config)

    return response.data
}

// Get User Strains
const getStrains = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete a strain
const deleteStrain = async (strainId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + strainId, config)

    return response.data
}

const strainService = {
    createStrain,
    getStrains,
    deleteStrain
}

export default strainService