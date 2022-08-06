import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postSignUp(signUp) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, signUp);
    return promise;
}

function postLogin(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
}

function getHabits(config) {
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function postNewHabit(body, config) {
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

function deleteHabit(config, habitId) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
    return promise;
}

function getTodayHabits(config) {
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function postCheckHabit(config, habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, config);
    return promise;
}

function postUncheckHabit(config, habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, config);
    return promise;
}

function getDailyHistory(config) {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, config);
    return promise;
}

export {
    postSignUp,
    postLogin,
    getHabits,
    postNewHabit,
    deleteHabit,
    getTodayHabits,
    postCheckHabit,
    postUncheckHabit,
    getDailyHistory
};