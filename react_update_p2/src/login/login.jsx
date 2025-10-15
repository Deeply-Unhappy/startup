import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
      <form action="lobby_and_game" method="get" className="login-form">
            <input type="text" id="username" name="var_user" placeholder="Username (2-13 characters)" pattern="\w{2,16}"/>
            <input type="password" id="password" name="var_password" placeholder="Password/"/>
            <input type="submit" value="Login"/>
            <input type="submit" value="Register"/>
        </form>
    </main>
  );
}