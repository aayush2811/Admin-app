// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract AdminAuth
{   
    uint public adminCount = 0;
 
    mapping(string => admin) public adminsList;
 
     struct admin
     {
       string username;
       string email;
       string password;
     }
 
   // events
 
   event adminCreated(
      string username,
      string email,
      string password
    );
 
  function createAdmin(string memory _username,
                      string memory _email,
                      string memory _password) public
  {     
      adminCount++;
      adminsList[_email] = admin(_username,
                               _email,
                               _password);
      emit adminCreated(_username,
                       _email,
                       _password);
    }
}