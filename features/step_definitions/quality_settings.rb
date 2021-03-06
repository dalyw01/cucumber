Given(/^I am on a page with the HTML player and quality settings set to true$/) do
  visit('https://is.gd/nowusu')# Set to BUMP4 and Staging 
  sleep(1)
  page.driver.browser.manage.window.resize_to( 900 , 900 )
  sleep(1)
  page.execute_script( 'window.scrollBy(0, 270);')
end

Then("I click low option button") do
  within_frame 'smphtml5iframemp' do
    sleep(2)
    page.first("#p_qualityPanelFirstRow").click
    sleep(2)
  end
end

Then("I click medium option button") do
  within_frame 'smphtml5iframemp' do
    sleep(2)
    page.first("#p_qualityPanelMediumRow").click
    sleep(2)
  end
end

Then("I click high option button") do
  within_frame 'smphtml5iframemp' do
    sleep(2)
    page.first("#p_qualityPanelHighRow").click
    sleep(2)
  end
end

Then("I click quality settings button") do
  within_frame 'smphtml5iframemp' do
    sleep(1)
    page.first(".p_playbackSettingsButton").click
    sleep(1)
  end
end

Then("I click video quality settings button") do
  within_frame 'smphtml5iframemp' do
    sleep(1)
    page.first("#p_qualityRow").click
    sleep(1)
  end
end

Then(/^I verify low option has been selected$/) do
 within_frame 'smphtml5iframemp' do
   sleep(3)
   expect(page.find('#p_qualityPanelFirstRow')['aria-label']).to eq("Low quality selected")
   sleep(3)
 end
end

Then(/^I verify medium option has been selected$/) do
 within_frame 'smphtml5iframemp' do
   sleep(3)
   expect(page.find('#p_qualityPanelMediumRow')['aria-label']).to eq("Medium quality selected")
   sleep(3)
 end
end

Then(/^I verify high option has been selected$/) do
 within_frame 'smphtml5iframemp' do
   sleep(3)
   expect(page.find('#p_qualityPanelHighRow')['aria-label']).to eq("Highest quality available selected")
   sleep(3)
 end
end
