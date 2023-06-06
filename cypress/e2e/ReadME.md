### Testing Documentation ###

# Test Scenario:
  Add 2 suppliers to Comparison and assert that when adding the 3rd supplier, Pop-up Text appears with the according text "[...]".
</br>
</br>
<h2> Test Case: </h2>
<h3><i>1. Navigate to https://vlec.redplatform-staging.com</i></h3>
  </br>
  <p><b>Test Step: 1.</b> Visit https://vlec.redplatform-staging.com </br>
  </br>
  <b>Expected result: </b> Navigated successfully </br>
  <b>Actual result: </b> Navigated successfully </p> 
</br>
</br>
<h3><i> 2. Login to https://vlec.redplatform-staging.com</i></h3>

  <p><b>Test Step: 1.</b> Insert valid username</br>
  <b>Test Step: 2.</b> Insert valid password</br>
  <b>Test Step: 3.</b> Click login button</br></p>
  </br>
  <p><b>Expect result: </b> Login successfully</br>
  <b>Actual result: </b> Login successfully</br></p>
</br>
</br>
<h3><i> 3. Navigate to Energy Marketplace</i></h3>
  <p><b>Test Step: 1.</b> Click Hamburger</br>
  <b>Test Step: 2.</b> Click Energy marketplace</br></p>
</br>
  <p><b>Expect result: </b> Energy Marketplace tab opened</br>
  <b>Actual result: </b> Energy Marketplace tab opened</p>
</br>
</br>

<h3><i>4. Filter by location</i></h3>
  <p><b>Test Step: 1.</b> Click country textbox, type country name</br>
  <b>Test Step: 2.</b> Click region textbox, type region name</br>
  <b>Test Step: 3.</b> Click city textbox, type city name</br>
</br>
  <p><b>Expect result: </b> Suppliers filtered by location</br>
  <b>Actual result: </b> Suppliers filtered by location
</br></br>
</br>

<h3><i> 5. Add 3 suppliers to comparison </i></h3>
  <p><b>Test Step: 1. </b> Click Compare button on first offer-card and assert pop-up text is <i> "Offer added to compare" </i></br>
  <b>Test Step: 2. </b>  Click Compare button on second offer-card and assert pop-up text is <i>"Offer added to compare"</i></br>
  <b>Test Step: 3. </b>  Click Compare button on third offer-card and assert pop-up text is <i> "You already have offers in compare [...]"<i></br></p>
</br>
  <p><b>Expect result: </b> Only 2 suppliers can be added to comparison list</br>
  <b>Actual result: </b> Only 2 suppliers can be added to comparison list</p>
</br>
</br>