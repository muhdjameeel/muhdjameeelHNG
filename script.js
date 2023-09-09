Number.prototype.pad = function (e) {
    for (var digit = this.toString(); digit.length < e; digit = "0" + digit);
    return digit;
  };
  
  function updateClock() {
    const myDate = new Date();
      let sec = myDate.getSeconds(),
      min = myDate.getMinutes(),
      hou = myDate.getHours(),
      milli = myDate.getMilliseconds();
      let meridian = hou < 12 ? 'AM' : 'PM';
  
    let tags = ["h", "mins", "secs", "milli"],
      corr = [hou.pad(2), min.pad(2), sec.pad(2), milli];
    for (let i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
      document.getElementById('meridian').innerText = meridian;
  

    let day = myDate.toLocaleString('default', {weekday: 'long'})
    document.getElementById("day").textContent = ' Day: ' + day;
  }
  
  let digitalClock = () => {
    updateClock()
    setInterval(updateClock, 1);
  }
  
  digitalClock();