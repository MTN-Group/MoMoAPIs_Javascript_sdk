

# MOMOAPI-Sample Web App for Javascript SDK
This is a sample web app provided to demonstrate the working of MOMOAPI SDK in Javascript


## How to clone the project into local machine


Clone the project using SSH or HTTPS 

#### HTTPS

```
https://github.com/gsmainclusivetechlab/momoapi-javascript-sdk.git

```

#### SSH  

```
git@github.com:gsmainclusivetechlab/momoapi-javascript-sdk.git

```

#### Steps to run test app using visual studio;

1.Open this repo in visual studio ,

2.next step to enter the test app folder using
```
cd test-app

```
then,
```
npm install

```
to run,
```
npm start

```

## How to test sample app

1.Once's the web app is loaded

2.The landing page will have list of all uses cases

3.Click on use case link and the web app will listed to corresponding activity

4.The activity contains all scenarios for a particular use case

5.Each uses cases can be tested using the link  provided in the test application

# Use cases

* Collection
* Disbursement
* Remittance


# Collection

* [Request Pay](#RequestPay)
* [ValidateAccount Account holder](#ValidateAccount-Account-holder)
* [Get Balance](#Get-Balance)
* [Get Balance in specific currency](#Get-Balance-in-specific-currency)
* [Request to withdraw](#Request-to-withdraw)
* [Validate Consumer Identity](#Validate-Consumer-Identity)
* [Get Consumer Information with Consent](#Get-Consumer-Information-with-Consent)	

# Disbursement

* [Transfer](#Transfer)
* [ValidateAccount Account holder](#ValidateAccount-Account-holder)
* [Get Balance](#Get-Balance)
* [Get Balance in specific currency](#Get-Balance-in-specific-currency)
* [Deposit](#Deposit)
* [Refund](#Refund)
* [Validate Consumer Identity](#Validate-Consumer-Identity)
* [Get Consumer Information with Consent](#Get-Consumer-Information-with-Consent)	


# Remittance

* [Transfer](#Transfer)
* [ValidateAccount Account holder](#Validate-Account-holder)
* [Get Balance](#Get-Balance)
* [Get Balance in specific currency](#Get-Balance-in-specific-currency)
* [Validate Consumer Identity](#Validate-Consumer-Identity)
* [Get Consumer Information with Consent](#Get-Consumer-Information-with-Consent)	

<a name="RequestPay"></a>

# Request pay

Expected output of this function is given below

## Request pay - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"

}
```

## Get Request to pay transaction status - output

```json
{
 	"financialTransactionId": "529186712",
 	"externalId": "6353636",
 	"amount": "5",
 	"currency": "EUR",
 	"payer": {
 		"partyIdType": "MSISDN",
 		"partyId": "0248888736"
 	},
 	"payerMessage": "Pay for product a",
 	"payeeNote": "payer note",
 	"status": "SUCCESSFUL"
 }

```
## Delivery notification - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"

}
```
<a name="ValidateAccount-Account-holder"></a>


# Validate account holder


Expected output of this function is given below

## Validate account holder status - output

```json
{
	"result": true
}
```
<a name="Get-Balance"></a>


# Account Balance 


Expected output of this function is given below


##  Account Balance - output

```java

 {
      	"availableBalance": "0",
      	"currency": "EUR"
      }

```

<a name="Get-Balance-in-specific-currency"></a>

# Account Balance in specific currency


Expected output of this function is given below


##  Account Balance in specific currency - output

```json
{
    "availableBalance": "0",
     "currency": "EUR"
 }
```
<a name="Request-to-withdraw"></a>													  
													  
# Request to withdraw

Expected output of this function is given below

##  Request to withdraw V1 - output

```json

{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"

}

```
##  Request to withdraw V2 - output

```json

{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"
}

```
##  Request to withdraw transaction status - output

```json
{
 	"financialTransactionId": "1680501894",
 	"externalId": "6353636",
 	"amount": "5",
 	"currency": "EUR",
 	"payer": {
 		"partyIdType": "MSISDN",
 		"partyId": "0248888736"
 	},
 	"payerMessage": "Pay for product a",
 	"payeeNote": "payer note",
 	"status": "SUCCESSFUL"
 }
```
<a name="Collection-Validate-Consumer-Identity"></a>													  

# Validate consumer identity

Expected output of this function is given below
													  
## Validate consumer identity - output

```json
 {
	"sub": "0",
	"name": "Sand Box",
	"given_name": "Sand",
	"family_name": "Box",
	"birthdate": "1976-08-13",
	"locale": "sv_SE",
	"gender": "MALE",
	"updated_at": 1676609351
}

```
<a name="Get-Consumer-Information-with-Consent"></a>

# Get Consumer Information with Consent

The Validate Consumer Identity use case (KYC as a service) enables a partner to retrieve (limited) customer KYC information with their consent,

Expected output of this function is given below

```json
 {
 	"sub": "0",
 	"name": "Sand Box",
 	"given_name": "Sand",
 	"family_name": "Box",
 	"birthdate": "1976-08-13",
 	"locale": "sv_SE",
 	"gender": "MALE",
 	"updated_at": 1676961048
 }
```

<a name="Transfer"></a>

# Transfer
Transfer is used for transferring money from the provider account to a customer.

## Transfer - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"
}

```

## Get Transfer Status - output

```json
 {
 	"amount": "5",
 	"currency": "EUR",
 	"financialTransactionId": "1194704496",
 	"externalId": "6353636",
 	"payee": {
 		"partyIdType": "MSISDN",
 		"partyId": "0248888736"
 	},
 	"payerMessage": "Pay for product a",
 	"payeeNote": "payer note",
 	"status": "SUCCESSFUL"
 }

```

## Delivery Notification - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"
}
```

<a name="Deposit"></a>


# Deposit

Deposit operation is used to deposit an amount from the owner’s account to a payee account.

## Deposit V1 - output 

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"

}
```

## Deposit V2 - output 

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"

}
```

## Deposit Status - output

```json
 {
	"externalId": "6353636",
	"amount": "5",
	"currency": "EUR",
	"payee": {
		"partyIdType": "MSISDN",
		"partyId": "0248888736"
	},
	"payerMessage": "Pay for product a",
	"payeeNote": "payer note",
	"status": "SUCCESSFUL"
}
```
<a name="Refund"></a>

# Refund

Refund operation is used to refund an amount from the owner’s account to a payee account.

## Refund V1 - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"
}

```


## Refund V2 - output

```json
{
  "status": "true",
  "X-Reference-Id":"0a8b994d-969a-4ef0-92e3-0f7e14eb5b96"
}

```
## Refund Status - output

```json
{
	"financialTransactionId": "117184837",
	"externalId": "6353636",
	"amount": "5",
	"currency": "EUR",
	"payee": {
		"partyIdType": "MSISDN",
		"partyId": "0248888736"
	},
	"payerMessage": "Pay for product a",
	"payeeNote": "payer note",
	"status": "SUCCESSFUL"
}
 ```


