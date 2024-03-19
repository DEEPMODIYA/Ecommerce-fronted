import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => { 
    const options = {
        method: 'GET',
        headers: {
          'User-Agent': 'insomnia/8.6.1',
          Authorization: 'Bearer 1e0b9e875bf9bbb8834fe7f85e6f467821513cb43ff885c1508715d473bfd3178e4745e3dadde962d0b8fe6bee39a93f350808f400548618f4127944a4f55d0b8ef1561b47c5e58bfc9e447b13166fb7b920f07a58806504306665ba8e0841588e6110cdf5ffcd6c420010d71826eaf9753a4bd68ccfdfdc79b2de0eccd30403'
        }
      };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    //console.log(data);
    return data;
};

// export const makePaymentRequest = async (endpoint,payload) => {
//     const res = await fetch(`${API_URL}${endpoint}`, {
//       method: "POST",
//         headers: {
          
//           Authorization: 'Bearer 1e0b9e875bf9bbb8834fe7f85e6f467821513cb43ff885c1508715d473bfd3178e4745e3dadde962d0b8fe6bee39a93f350808f400548618f4127944a4f55d0b8ef1561b47c5e58bfc9e447b13166fb7b920f07a58806504306665ba8e0841588e6110cdf5ffcd6c420010d71826eaf9753a4bd68ccfdfdc79b2de0eccd30403'
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify(payload),
//     });
     
// };

