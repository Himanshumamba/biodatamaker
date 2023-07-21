function handleSubmit(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var dobDay = document.getElementById("dob_day").value;
    var dobMonth = document.getElementById("dob_month").value;
    var dobYear = document.getElementById("dob_year").value;
    var timeHour = document.getElementById("time_hour").value;
    var timeMinute = document.getElementById("time_minute").value;
    var timeSeconds = document.getElementById("time_seconds").value;
    var timePeriod = document.getElementById("time").value;
    var place = document.getElementById("place").value;
    var rashi = document.getElementById("rashi").value;
    var nakshatra = document.getElementById("nakshatra").value;
    var height = document.getElementById("height").value;
    var maritalStatus = document.getElementById("marital_status").value;
    var religion = document.getElementById("religion").value;
    var motherTongue = document.getElementById("mother_tongue").value;
    var caste = document.getElementById("caste").value;
    var subcaste = document.getElementById("subcaste").value;
    var gotra = document.getElementById("gotra").value;
    var manglik = document.getElementById("manglik").value;
    var education = document.getElementById("education").value;
    var college = document.getElementById("college").value;
    var employedIn = document.getElementById("employed_in").value;
    var organization = document.getElementById("organization").value;
    var income = document.getElementById("income").value;
    var fatherName = document.getElementById("father_name").value;
    var fatherOccupation = document.getElementById("father_occupation").value;
    var motherName = document.getElementById("mother_name").value;
    var motherOccupation = document.getElementById("mother_occupation").value;
    var totalBrothers = document.getElementById("total_brothers").value;
    var totalSisters = document.getElementById("total_sisters").value;
    var marriedBrothers = document.getElementById("married_brothers").value;
    var marriedSisters = document.getElementById("married_sisters").value;
    var contactNumber = document.getElementById("contact_number").value;
    var email = document.getElementById("email").value;
    var addressLine1 = document.getElementById("address_line1").value;
    var addressLine2 = document.getElementById("address_line2").value;
  
    var result = document.getElementById("result");
    var overlay = document.getElementById("overlay");
    result.style.display = "block";
    overlay.style.display = "block";

    result.innerHTML =
    '<div style="font-family: Arial, sans-serif; line-height: 1.4; text-align: center; padding: 20px;">' +
    '<h1 style="margin-bottom: 10px;">Resume</h1>' +
    '<hr style="border-top: 1px dashed #ccc; margin-bottom: 20px;">' +
    '<div>' +
      '<h2 style="font-size: 18px; margin-bottom: 10px;">Personal Information</h2>' +
      '<p><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Gender:</strong> ' + gender + '</p>' +
      '<p><strong>Date of Birth:</strong> ' + dobDay + '/' + dobMonth + '/' + dobYear + '</p>' +
      '<p><strong>Time of Birth:</strong> ' + timeHour + ':' + timeMinute + ':' + timeSeconds + ' ' + timePeriod + '</p>' +
      '<p><strong>Place of Birth:</strong> ' + place + '</p>' +
      '<p><strong>Rashi:</strong> ' + rashi + '</p>' +
      '<p><strong>Nakshatra:</strong> ' + nakshatra + '</p>' +
      '<p><strong>Height:</strong> ' + height + '</p>' +
      '<p><strong>Marital Status:</strong> ' + maritalStatus + '</p>' +
    '</div>' +
    '<div style="margin-top: 20px;">' +
      '<h2 style="font-size: 18px; margin-bottom: 10px;">Education and Employment</h2>' +
      '<p><strong>Education:</strong> ' + education + '</p>' +
      '<p><strong>College Name:</strong> ' + college + '</p>' +
      '<p><strong>Employed in:</strong> ' + employedIn + '</p>' +
      '<p><strong>Organization Name:</strong> ' + organization + '</p>' +
      '<p><strong>Annual Income:</strong> ' + income + '</p>' +
    '</div>' +
    '<div style="margin-top: 20px;">' +
      '<h2 style="font-size: 18px; margin-bottom: 10px;">Family Details</h2>' +
      '<p><strong>Father\'s Name:</strong> ' + fatherName + '</p>' +
      '<p><strong>Father\'s Occupation:</strong> ' + fatherOccupation + '</p>' +
      '<p><strong>Mother\'s Name:</strong> ' + motherName + '</p>' +
      '<p><strong>Mother\'s Occupation:</strong> ' + motherOccupation + '</p>' +
      '<p><strong>Total Brothers:</strong> ' + totalBrothers + '</p>' +
      '<p><strong>Total Sisters:</strong> ' + totalSisters + '</p>' +
      '<p><strong>Married Brothers:</strong> ' + marriedBrothers + '</p>' +
      '<p><strong>Married Sisters:</strong> ' + marriedSisters + '</p>' +
    '</div>' +
    '<div style="margin-top: 20px;">' +
      '<h2 style="font-size: 18px; margin-bottom: 10px;">Contact Information</h2>' +
      '<p><strong>Contact Number:</strong> ' + contactNumber + '</p>' +
      '<p><strong>Email ID:</strong> ' + email + '</p>' +
    '</div>' +
    '<div style="margin-top: 20px;">' +
      '<h2 style="font-size: 18px; margin-bottom: 10px;">Address</h2>' +
      '<p>' + addressLine1 + '</p>' +
      '<p>' + addressLine2 + '</p>' +
    '</div>' +
  '</div>' +
  '<div style="text-align: center; margin-top: 30px;">' +
    '</div>';




  }
