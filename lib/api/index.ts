/** api경로에 매번 http://localhost:3000 을 적어 사용하는 것은 번거로움
 * 따라서 axios의 기본경로를 설정하겠음
 */
import Axios from "axios";

const axios = Axios.create({
  //axios를 create할때 baseURL을 아래와 같이 하겠음
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;
