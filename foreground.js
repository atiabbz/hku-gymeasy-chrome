chrome.storage.local.get(
  [
    "preferred_fc",
    "email",
    "name",
    "uid",
    "vaccination",
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "declaration",
  ],
  (result) => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const url = window.location.href;
    if (url === "https://fcbooking.cse.hku.hk/") {
      document.querySelector(`#${result.preferred_fc}`).click();
      document.querySelector(".card-body").scrollIntoView();
    } else {
      document.querySelector("#Email").value = result.email;
      document.querySelector("#FirstName").value = result.name;
      document.querySelector("#MemberID").value = result.uid;

      if (result.vaccination) {
        document.querySelector("#vacine_t").checked = true;
      } else {
        document.querySelector("#vacine_f").checked = true;
      }

      if (result.q1) {
        document.querySelector("#Q1_t").checked = true;
      } else {
        document.querySelector("#Q1_f").checked = true;
      }

      if (result.q2) {
        document.querySelector("#Q2_t").checked = true;
      } else {
        document.querySelector("#Q2_f").checked = true;
      }

      if (result.q3) {
        document.querySelector("#Q3_t").checked = true;
      } else {
        document.querySelector("#Q3_f").checked = true;
      }

      if (result.q4) {
        document.querySelector("#Q4_t").checked = true;
      } else {
        document.querySelector("#Q4_f").checked = true;
      }

      if (result.q5) {
        document.querySelector("#Q5_t").checked = true;
      } else {
        document.querySelector("#Q5_f").checked = true;
      }

      if (result.q6) {
        document.querySelector("#Q6_t").checked = true;
      } else {
        document.querySelector("#Q6_f").checked = true;
      }

      if (result.q7) {
        document.querySelector("#Q7_t").checked = true;
      } else {
        document.querySelector("#Q7_f").checked = true;
      }

      if (result.q8) {
        document.querySelector("#Q8_t").checked = true;
      } else {
        document.querySelector("#Q8_f").checked = true;
      }

      if (result.declaration) {
        document.querySelector("#dataCollection").checked = true;
      } else {
        document.querySelector("#dataCollection").checked = false;
      }

      const payment = document.createElement("div");
      payment.id = "payment";
      payment.classList.add(
        "alert",
        "alert-warning",
        "d-flex",
        "justify-content-center",
        "col-12"
      );
      payment.innerHTML = `
        <div class="row">
          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <div class="card-body d-flex align-items-center">
                <span>
                  <h5 class="card-title">Protein 🍳</h5>
                  <p class="card-text">
                    I made GymEasy to streamline the cumbersome process of gym session bookings at HKU.
                    <br>
                    If you find it useful, please consider adding to my protein fund!
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <a href="https://payme.hsbc/atiabbz" target="_blank">
                <img src="https://raw.githubusercontent.com/atiabbz/HKU-GymEasy/master/images/hsbcpayme.png" class="card-img-top" alt="hsbcpayme">
              </a>
              <div class="card-body d-flex justify-content-center align-items-center">
                <span class="font-monospace">→&nbsp;</span>
                <a href="https://payme.hsbc/atiabbz" target="_blank" class="btn btn-danger">
                  HSBC PayMe
                </a>
                <span class="font-monospace">&nbsp;←</span>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <a href="https://qr.alipay.hk/28100401012kfekjs4lin5lx86" target="_blank">
                <img src="https://raw.githubusercontent.com/atiabbz/HKU-GymEasy/master/images/alipayhk.png" class="card-img-top" alt="alipayhk">
              </a>
              <div class="card-body d-flex justify-content-center align-items-center">
                <span class="font-monospace">→&nbsp;</span>
                <a href="https://qr.alipay.hk/28100401012kfekjs4lin5lx86" target="_blank" class="btn btn-primary">
                  AlipayHK
                </a>
                <span class="font-monospace">&nbsp;←</span>
              </div>
            </div>
          </div>
        </div>
      `;

      document
        .querySelector("#gCaptcha")
        .insertAdjacentElement("beforebegin", payment);

      document.querySelector("#sbmtBtn").removeAttribute("disabled");

      if (url.includes("SignUpPS")) {
        document.querySelector('label[for="dataCollection"]').scrollIntoView();
      } else {
        document.querySelector("#CenterID").focus();
      }
    }
  }
);
