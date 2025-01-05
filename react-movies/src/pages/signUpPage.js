// Credit - https://www.youtube.com/watch?v=VcsGDtpck6I
import { Card } from "@mui/material";
import {FormEvent, useContext} from "react";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { Controller } from "react-hook-form";
import {Typography} from "@mui/material";
import { MoviesContext } from "../contexts/moviesContext";
import { auth, app } from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = (props) => {

  //const context = useContext(MoviesContext);

  // const userLoggedIn = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const signUp = (e) => {
    e.preventDefault();
    console.log(email + ", " + password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    navigate("/");
    // ...
  })
  .catch((error) => {
    console.log(error);
  });
  }

  // const [isSigningIn, setIsSigningIn] = useState(false);

  // const onSubmit = async (e, email, password) => {
  //   e.preventDefault();

  //   setEmail(email);
  //   setPassword(password);

  //   console.log(email + ", " + password);

  //   //e.preventDefault();
  //   if(!isSigningIn) {
  //     setIsSigningIn(true);
  //     await doCreateUserWithEmailAndPassword(email, password);
  //   }
  //   return false;
  // };

  // const defaultValues = {
  //   email:"",
  //   password:""
  // };

  // const {
  //   control,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm(defaultValues);

  //const signUp = 

  return (
    <>
      <Card>

        {/* <h1>email</h1>

        <div onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Name is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="password"
              label="password"
              name="password"
              autoFocus
            />
          )}
        />
        {errors.author && (
          <Typography variant="h6" component="p">
            {errors.author.message}
          </Typography>
        )}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Review cannot be empty.",
            minLength: { value: 10, message: "Review is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              value={value}
              onChange={onChange}
              label="email"
              id="review"
            />
          )}
        />
        {errors.review && (
          <Typography variant="h6" component="p">
            {errors.review.message}
          </Typography>
        )}

          <Button
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </div> */}
        <h1>Sign up</h1>

        {/* <form >
          <input
            type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}  value={email} class="input-field"
          ></input>

          <input
            type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} class="input-field"
          ></input>
        
          <button type="submit" name="submit" class="input-submit" value="sign in">Sign in</button>
        </form>
      </Card> */}



        <form onSubmit={signUp}>
          <input
            type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}  value={email} class="input-field"
          ></input>

          <input
            type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} class="input-field"
          ></input>
        
          <button type="submit" name="submit" class="input-submit" value="sign in">Sign in</button>
        </form>

      </Card>

      
    </>
  );
};
export default SignUpPage;