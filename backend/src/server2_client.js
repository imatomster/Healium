let prevMSG;

var t=setInterval(() => {
  fetch(`http://localhost:4001/v1/user2/getMSG`).then(
    (response) => {
        response.json().then(data => {
          // d = JSON.stringify(data)
          data.json().then( d => {
            console.log(d)
          })
          if (prevMSG == null || prevMSG != data.recievedMSG) {
            console.log(d);
            prevMSG = d.recievedMSG;
          }
        });
    }
  )
},1000);
