@Chromecast
Feature: Checking core functionality of Chromecast works correctly (Android and Mobile Browser only as well as Desktop Browser)

As a tester of SMP
I want to check core functionality of Chromecast
So i can ensure that it works as expected 

Connecting ChromeCast requirements 
- Ensure HTTPS:// is in the URL 
- ChromeCast and Device need to be on the same network
- "allowcasting: true" in settings cookbook 
- Queued playlist.  

 "queuedPlaylist": {
    "title": "Chromecast Playlist 2 - Anxiety",
    "allowContinuousCast": true,
    "items": [
      {
        "vpid": "p05wxs88",
        "kind": "programme"
      }
    ],
    "guidance": "LOL ANXIETY"
  },
  "guidance": "LOL DOGS"

Background
Given I have a ChromeCast and device connected to the same network with the HTML player
And i have ChromeCast content with CP Plugin
When the COOKBOOK is loaded 
When I click the CTA to begin playback 
And I can see the video playback
Then Press Chromecast Icon
And i can see Chromecast connecting

@CheckBasicPlayerControls
Scenario: A check for all the basic player functionality 
When i see video casted onto the screen
And i Press Pause button 
Then video should pause 
And i press the play buttton the player should play
Then player should play again 
And i press the full screen button 
Then player should go into full screen view 
And i seek to another position 
Then video should shift to that position

@CheckCastButtonDesktop
Scenario: Check basic chromecast functionality works as expected 
Then i can see the video being casted onto the screen 

@CheckFullScreenModeDesktop
And i press the full screen mode icon button 
Then the screen should go to fullscreen mode 
And when i exit fullscreen mode the page should return back to its original position 
Then the cast should be returned to non full screen mode and continue playing

@CastControlPositioning
Scenario: Check chromecast controls is placed in the top left of the player, avoiding overlapping with the CP 
Then the chromecast controls should be placed in the top left corner of the player and remain in that position

@CastButtonIsntUnderLinedIfOff
Scenario: if cast is off, cast icon in the control bar shouldn't be underlined 
Then i can see the video being casted onto the screen 
And i stop the cast
Then the Chromecast icon button shouldn't still be underlined 

@CheckQueuedPlayListPausingWorks
Scenario: When viewing a casted queued playlist if i pause on the second video the timer on the video continues increasing 
And i can see the video being casted onto the screen 
And i use the seek bar to get to the second video 
Then i let the second video play for "" seconds 
Then Pause the video 
Then the video duration counter shouldn't increment 

@CorrectHoldingImagedIsPlaying 
Scenario: On a queued playlist the correct holding image should show on each video 
And the correct holding image should appear on the browser player 
Then seek to the next video
Then the holding image should be the correct one for the second video in queued playlist 

@CorrectCastNameAppearOnScreen
Scenario: Check that the name of the Chromecast is the same name that is displayed on screen when connecting
Then i can see the chromecast name should be the same as the chromecast 

@CastingAndPiPContentPlayingSameTime
Scenario: Casting content and using PIP and fullscreen mode and checking this can be done without anything breaking 
Then i click the PIP icon button 
And PIP second window appears press play on this window
And the second PIP window will begin to play
Then i click the full screen mode button on original video window
Then the PIP content will be playing in fullscreen whilst the casting video is on the second screen 

@StoppingCastInCastQueuedPlaylist
Scenario: Stopping a cast on the second video in a queued playlist and seeing the timer on the video stop correctly 
WWhen i can see the Chromecast connecting
Then i can see the video being casted onto the screen 
Then i the seekbar to scroll across to the next video in the queued playlist 
And i cancel the cast on only the second video in the queued playlist 
Then i will see the video timer on the player going up even though the cast has been stopped 

Forces user to have to reload the page to view content again 


@TransportBarIsLostAfterFullscreen
Scenario: On mobile when you exit full screen mode you lose access to the transport bar, so no access to the seekbar fullscreen mode etc
When i can see the chromecast connecting 
And i can see the video being casted onto the second screen 
And i press the full screen button on the video player on the mobile device 
Then i press the full screen button again to return back to the normal video player size 
Then i lose transport bar and it's lost and cannot be returned 

@CastPIPAndFullScreenDisablesPlayButton
Scenario: Checking you can cast PIP and use full screen mode at the same time without any issues 
When i can see the Chromecast connecting
And i can see the video playing on the second casting screen 
And i click the PIP icon button
And the PIP window will open 
And i click play on the PIP window it will start to play 
And i click the full screen mode button 
And i click the pause button in full screen mode
And i try to press the same button again
Then nothing happens again the button becomes in-active 

ACTUAL YE
YE



hhghjthtjthm



