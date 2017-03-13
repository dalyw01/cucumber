# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# NOTE : This steps definition file uses many of the same steps from u16 and o16
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Given(/^multiple anon HTML players with guidance and NO cookies$/) do
  visit('http://smp-scratch.tools.bbc.co.uk/dalyw01/cucumber_players/multiple_anon_players.html')
  sleep(2)
  page.driver.browser.manage.delete_all_cookies()
  sleep(2)
  visit('http://smp-scratch.tools.bbc.co.uk/dalyw01/cucumber_players/multiple_anon_players.html')
  page.driver.browser.manage.window.resize_to( 700, 700 )
  sleep(1)
end

When(/^I press \[Continue\]$/) do
  within_frame 'smphtml5iframemedia_player_1' do
    sleep(1)
    find('#pgAgeContinue').click
    sleep(2)
  end
end

When(/^I press BUMP \[Continue\]$/) do
  find('#pgAgeContinue').hover
  sleep(1)
  find('#pgAgeContinue').click
end
