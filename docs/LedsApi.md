# Balenahal.LedsApi

All URIs are relative to *http://localhost:8181*

Method | HTTP request | Description
------------- | ------------- | -------------
[**off**](LedsApi.md#off) | **GET** /leds/off | 
[**on**](LedsApi.md#on) | **GET** /leds/on | 



## off

> off(led)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.LedsApi();
let led = "led_example"; // String | 
apiInstance.off(led).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **led** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## on

> on(led)



### Example

```javascript
import Balenahal from 'balenahal';

let apiInstance = new Balenahal.LedsApi();
let led = "led_example"; // String | 
apiInstance.on(led).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **led** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

