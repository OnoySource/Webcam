
            alrert("hhhh");
            //seleksi element video
            var video = document.querySelector("#vid-webcam");
            //minta izin user
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia ||
                navigator.oGetUserMedia;

            if (navigator.getUserMedia) {
                navigator.getUserMedia(
                    { video: true },
                    handleVideo,
                    videoError
                );

                function handleVideo(stream) {
                    video.srcObject = stream;
                }
            } else {
                function videoError(e) {
                    alert("izinkan menggunakan kamera");
                }
            }

            function takeSnapShot() {
                var img = document.createElement("img");
                var context;

                //ambil ukuran video
                var width = video.offsetWidth,
                    height = video.offsetHeight;

                //buat element canvas
                canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                //ambil gambar dari video dan masukan
                //kedalam canvas
                context = canvas.getContext("2d");
                context.drawImage(video, 0, 0, width, height);

                //render hasil dari canvas ke elemnt img
                img.src = canvas.toDataUrl("image/png");
                document.body.appendChild(img);
            }
  