export const formatFlyTime = (arrival, departure) => {
  try {
    let times = ((new Date(arrival)-new Date(departure))/(3600*1000))
    .toString()
    .split(/\./)
    let time = `${times[0]}hs ${times[1].slice(0,2)}min `
    return time
  } catch (error) {
    console.error(error.message)
    return
  }
}

export const formatPrice = (price, money) => {
  let formattedPrice = '';
  switch(money){
    case 'ARS':
      formattedPrice+='$ ';
      break;
    case 'USD':
      formattedPrice+='$USD ';
      break;
    case 'URU':
        formattedPrice+='$URU '; //--- continue adding money values
        break;
    default: 
      formattedPrice+='$ ';
      break;
  }
  formattedPrice += price.toString().replace(/\./,',');
  return formattedPrice
}