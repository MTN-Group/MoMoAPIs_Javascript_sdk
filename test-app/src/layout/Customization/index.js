import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  basicAuthentication,
  standardAuthentication,
} from "../../utils/authentication";
// material-ui
import { useTheme } from "@material-ui/styles";
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
  TextField,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import SubCard from "ui-component/cards/SubCard";
import AnimateButton from "ui-component/extended/AnimateButton";
import { SET_AUTH, UPDATE_PRODUCT } from "store/actions"; // THEME_RTL
import { gridSpacing } from "store/constant";

// assets
import { IconSettings } from "@tabler/icons";
import { BorderAll } from "@material-ui/icons";
// concat 'px'
const productDetails = [
  { username: 'ee0128a6-9625-4049-819b-dd34f50bfec0', password: '43eff5076a0a4858adb7b95d8c69b3f4', subscriptionKey: '4fd0d94217004bc48a00ae95295140df', id: 'collection' },
  { username: 'ee0128a6-9625-4049-819b-dd34f50bfec0', password: '43eff5076a0a4858adb7b95d8c69b3f4', subscriptionKey: 'd34f9bb867b24001b364789269b60422', id: 'disbursement' },
  { username: 'ee0128a6-9625-4049-819b-dd34f50bfec0', password: '43eff5076a0a4858adb7b95d8c69b3f4', subscriptionKey: '87a218cbc8e042dc83c4ddd44f30e3f1', id: 'remittance' },
];
// ===========================|| LIVE CUSTOMIZATION ||=========================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  // const formData = useSelector((state) => state.formData);
  // drawer on/off
  const [open, setOpen] = React.useState(false);
  // const setFormParams = (name, value) => {`  ```
  //   setFormState({ ...formState, [name]: value });
  // };
  const [authMethod, setAuthMethod] = useState(1);
  const [authorised, setAuthorised] = useState(false);
  const [product, setProduct] = React.useState('');
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    subscriptionKey: ''
  });

  /**
  * Toggle open
  */
  const handleToggle = () => {
    setOpen(!open);
  };

  /**
   * On change event handle
   * @param {*} event 
   */
  const handleChange = (event) => {
    setProduct(event.target.value);
    const productname = productDetails.find(product => product.id === event.target.value)
    setFormState({ username: productname.username, password: productname.password, subscriptionKey: productname.subscriptionKey })
  };

  useEffect(() => {
    if (authorised && open) {
      setOpen(false);
    }
    console.log(window.momo);
  }, [authorised]);
  useEffect(() => {
    if (authorised) {
      setAuthorised(false);
    }
    if (authMethod !== 0 && Object.keys(formState).length === 0) {
      setFormState({
        username: process.env.REACT_APP_CONSUMER_KEY,
        password: process.env.REACT_APP_CONSUMER_SECRET,
        callbackUrl: "https://end13wxm5t7fgd6.m.pipedream.net/",
      });
    }
    switch (authMethod) {
      case 0:
        dispatch({ type: SET_AUTH, authType: "no-auth", authParams: {} });
        break;
      case 1:
        dispatch({
          type: SET_AUTH,
          authType: "basic-auth",
        });
        break;
      case 2:
        dispatch({
          type: SET_AUTH,
          authType: "oauth-2",
        });
        break;
      default:
        dispatch({
          type: SET_AUTH,
          authType: "no-auth",
        });
        break;
    }
  }, [authMethod]);
  //0- No Auth
  //1- Basic Authentication
  //2- OAuth2
  const generateAuthHeader = () => {
    if (formState.username && formState.password) {
      basicAuthentication(
        formState.username,
        formState.password,
        formState.subscriptionKey ? formState.subscriptionKey : null,
        product,
        dispatch,
        setOpen,
        setAuthorised,
      )
      // setTimeout(() => {
      // if (window.momo.auth) {
      //   setAuthorised(true);
      //   setOpen(false);
      // } else {
      //   alert("Authentication failed");
      // }
      // }, 1000);
    }
  };
  const generateToken = () => {
    if (formState.username && formState.password) {
      standardAuthentication(
        formState.username,
        formState.password,
        formState.SUBSCRIPTION_KEY,
        formState.apiKey,
        () => {
          setAuthorised(true);
          setOpen(false);
        },
        (res) => {
          alert("Authentication failed");
          console.log("AUTH FAILED :", res);
        }
      );
      // setTimeout(() => {
      // }, 1000);
    }
  };
  const AuthAttributesForm = (authMethod) => {
    switch (authMethod) {
      case 1:
        return (
          <div className="container form-container">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Products</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={product}
                label="Product"
                onChange={handleChange}
              >
                <MenuItem value={'collection'}>collection</MenuItem>
                <MenuItem value={'disbursement'}>disbursement</MenuItem>
                <MenuItem value={'remittance'}>remittance</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic-usr-name"
              label="Username"
              variant="outlined"
              size="small"
              value={formState?.username}
              onChange={(e) => {
                setFormState({ username: e.target.value, password: formState?.password, subscriptionKey: formState?.subscriptionKey });
              }}
            />
            <TextField
              id="outlined-basic-pwd"
              type="password"
              label="Password"
              variant="outlined"
              value={formState?.password}
              size="small"
              onChange={(e) => {
                setFormState({ username: formState?.username, password: e.target.value, subscriptionKey: formState?.subscriptionKey });

              }}
            />
            <TextField
              id="outlined-basic-sub"
              label="Ocp-Apim-Subscription-Key"
              variant="outlined"
              value={formState?.subscriptionKey}
              size="small"
              onChange={(e) => {
                setFormState({ username: formState?.username, password: formState?.password, subscriptionKey: e?.target?.value });

              }}
            />
            {customization.authParams &&
              customization.authParams.Authorisation && (
                <p>{`Authorisation header generated: ${customization.authParams.Authorisation}`}</p>
              )}
            <Button
              variant="contained"
              color="success"
              onClick={() => generateAuthHeader()}
            >
              Generate Authorisation Header
            </Button>

          </div>
        );
        // case 2:
        //   return (
        //     <div className="container form-container">
        //       <TextField
        //         id="outlined-basic-usr-name"
        //         label="API Key"
        //         variant="outlined"
        //         size="small"
        //         defaultValue={process.env.REACT_APP_CLIENT_API_KEY}
        //         onClick={(e) => setFormParams("apiKey", e.target.value)}
        //         onChange={(e) => setFormParams("apiKey", e.target.value)}
        //       />
        //       <TextField
        //         id="outlined-basic-cons-key"
        //         label="Consumer Key"
        //         variant="outlined"
        //         defaultValue={""}
        //         size="small"
        //         onClick={(e) => setFormParams("username", e.target.value)}
        //         onChange={(e) => {
        //           setFormParams("username", e.target.value);
        //         }}
        //       />
        //       <TextField
        //         id="outlined-basic-cons-secret"
        //         type="password"
        //         label="Consumer Secret"
        //         variant="outlined"
        //         size="small"
        //         defaultValue={""}
        //         onClick={(e) => setFormParams("password", e.target.value)}
        //         onChange={(e) => {
        //           setFormParams("password", e.target.value);
        //         }}
        //       />
        //       <TextField
        //         id="outlined-basic"
        //         label="Global Callback URL"
        //         variant="outlined"
        //         size="small"
        //         defaultValue={""}
        //         onClick={(e) => setFormParams("callbackUrl", e.target.value)}
        //         onChange={(e) => {
        //           setFormParams("callbackUrl", e.target.value);
        //         }}
        //       />

        //       {customization.authParams &&
        //         customization.authParams.Authorisation && (
        //           <p>{`Authorisation header generated: ${customization.authParams.Authorisation}`}</p>
        //         )}
        //       <Button
        //         variant="contained"
        //         color="success"
        //         onClick={() => generateToken()}
        //       >
        //         Generate Auth Token
        //       </Button>
        //       {authorised && (
        //         <p style={{ color: "rgb(0,255,0)" }}>Authenticated</p>
        //       )}
        //     </div>
        //   );
        // default:
        return null;
    }
  };
  return (
    <>
      {/* toggle button */}

      <Tooltip title="Authentication Types">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="string"
          color="secondary"
          sx={{
            bottom: 0,
            m: 4,
            position: "fixed",
            right: 20,
            zIndex: (theme) => theme.zIndex.speedDial,
            boxShadow: theme.shadows[8],
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* font family */}
              {/* <SubCard title="Authentication Type">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={authMethod}
                    onChange={(e) => {
                      setAuthMethod(parseInt(e.target.value));
                    }}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Basic Authentication"
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        "& .MuiFormControlLabel-label": { color: "grey.900" },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard> */}
              {/* {authMethod !== 0 && ( */}
                <SubCard>
                  <h3 align="center">Login </h3>
                  {authorised && (
                    <p style={{ color: "rgb(0,255,0)", textAlign: "center" }}>Authenticated</p>
                  )}
                  <FormControl>{AuthAttributesForm(authMethod)}</FormControl>
                </SubCard>
              {/* )} */}
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
