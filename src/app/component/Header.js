'use client';

import Link from "next/link";
import TokenStore from "../store/TokenStore";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header() {
//   const cookieStore = await cookies(); // use client 를 사용하면 서버 렌더링을 하는 cookies를 사용하지 못한다. 사용할거면 서버 컴퍼넌트로 해야 한다.
//   const accessToken = cookieStore.get("accessToken")?.value;

const {accessToken, setToken} = TokenStore();

const router = useRouter();

const API_URL = "/api/v1/members/logout";
function logout(){
    axios.post(API_URL).then((res) => {
        if(res.status == 200 && res.data.msg == "logout"){
            setToken(null);
            router.push("/"); // sendRedirect같은 이동
        }
    });
}

  return (
    <div>
      <div className="navBar">
        <Link href="/">Home</Link>
        <Link href="/members">Members</Link>
        <Link href="/bbs">Board</Link>
      </div>
      <div className="fr">
        {accessToken == null ? (
          <Link href="/members/login">Login</Link>
        ) : (
          <Link href="" onClick={logout}>Logout</Link>
        )}
        <Link href="/members/signup">Signup</Link>
      </div>
    </div>
  );
}
