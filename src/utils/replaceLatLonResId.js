function replaceLatLonResId(url, lat, lon, resId) {
  let newUrl = url;
  newUrl = newUrl.replace(/lat=[^&]*/, `lat=${lat}`);
  newUrl = newUrl.replace(/lng=[^&]*/, `lng=${lon}`);
  if (resId !== undefined) {
    newUrl = newUrl.replace(/restaurantId=[^&]*/, `restaurantId=${resId}`);
  }
  return newUrl;
}

export default replaceLatLonResId;
