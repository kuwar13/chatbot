import { Box, Button, Typography} from "@mui/material";
import React, { useEffect } from "react";
import CustomizedInput from "../components/shared/CustomizedInput";
import { BiSolidLogIn } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "signin" });
      await auth?.signin(email, password);
      toast.success("Signed In Successfully", { id: "signin" });
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "signin" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth]);
  
 
    return (
      <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={10} mt={10} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="robot"  style={{ width: "400px" ,height: "auto", 
        objectFit: "contain" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
         <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
          <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Sign In
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#66ff66",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<BiSolidLogIn />}
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
      </Box>
    );
      
  };
  
  export default Signin;