# Balenahal.GpioApi

All URIs are relative to *http://localhost:8181*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callExport**](GpioApi.md#callExport) | **GET** /gpio/export | 
[**getDirection**](GpioApi.md#getDirection) | **GET** /gpio/get-direction | 
[**getValue**](GpioApi.md#getValue) | **GET** /gpio/get-value | 
[**setDirection**](GpioApi.md#setDirection) | **GET** /gpio/set-direction | 
[**setValue**](GpioApi.md#setValue) | **GET** /gpio/set-value | 
[**unexport**](GpioApi.md#unexport) | **GET** /gpio/unexport | 



## callExport

> callExport(pin)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
apiInstance.callExport(pin).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDirection

> String getDirection(pin)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
apiInstance.getDirection(pin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValue

> String getValue(pin)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
apiInstance.getValue(pin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setDirection

> setDirection(pin, direction)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
let direction = "direction_example"; // String | 
apiInstance.setDirection(pin, direction).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 
 **direction** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setValue

> setValue(pin, value)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
let value = "value_example"; // String | 
apiInstance.setValue(pin, value).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 
 **value** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unexport

> unexport(pin)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.GpioApi();
let pin = "pin_example"; // String | 
apiInstance.unexport(pin).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pin** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

