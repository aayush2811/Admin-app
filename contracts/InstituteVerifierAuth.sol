// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract InstituteVerifierAuth{
    
    uint public instituteverifierCount=0;

    mapping(string => instituteverifier) public instituteverifiersList;

     struct instituteverifier{
      string username;
      string email;
      string password;
  }

   // events

   event instituteVerifierCreated(
      string username,
      string email,
      string password
    );

  function createInstituteVerifier(string memory _username,string memory _email,string memory _password ) public {
      
        instituteverifierCount++;

        instituteverifiersList[_email] = instituteverifier(_username,_email,_password);
      
        emit instituteVerifierCreated(_username,_email,_password);
    }


}