FB.getLoginStatus(function (response) {
  if (response.status === 'connected') {
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
    console.log(response.authResponse)
  } else if (response.status === 'not_authorized') {
    console.log(response.status, "1")
  } else {
    console.log(response.status, "2")
  }
});

// EAAHaygnMO5EBAH8RZBVi717ZAiLAhrADs8gXrQvUL2JcUvWO1…PQZCV8vdZCY1czzZAWElbamhsrFlOrY9CZC9L8otoJzdRhKxK