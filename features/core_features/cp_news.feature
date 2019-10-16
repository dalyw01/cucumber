@cpNews
Feature: Checking "Continious Play" plugin core functionality works

  As a tester of SMP
  I want the CPP panel to load at the end of the current clip
  So that I am informed and prompted about other available BBC content

  The difference being in NEWS that

  - For every single item with guidance, the user gets blocked
  - Press CTA if inline playback
  - Press play icon if in fullscreen

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  Background:
    Given I am on a page with the News HTML player and CP plugin installed
    When I click CTA to begin playback
    And I seek to end of programme

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  @InitiateNextItem
  Scenario Outline: Check pressing various icons of CPP initiate next clip
    Then I enter "<mode>"
    And CPP shows
    And I press "<button>"
    And I can resume past News blocking guidance in "<mode>"
    And I can pause new programme if "<button>"

  Examples:
    | button         | mode       |
    | Mini Thumbnail | inline     |
    | Mini CTA       | inline     |

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  @CpAndControls
  Scenario Outline: Check CPP does not break core SMP functionality
    Then I enter "<mode>"
    And CPP shows
    And I press "<button>"
    And I can resume past News blocking guidance in "<mode>"
    And I use core functionality of SMP
    And I seek to end of programme

  Examples:
    | button         | mode       | type |
    | Mini Thumbnail | inline     | vod  |
    | Mini CTA       | inline     | vod  |

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  @arrowLastItem
  Scenario Outline: Check user can scroll across carousel and play last item, last item no longer has countdown
    Then I enter "<mode>"
    And CPP shows
    And I scroll through whole carousel and select the last item
    And I seek to end of programme
    And CPP shows WITHOUT cancel options

  Examples:
    | mode       |
    | inline     |

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  @ToggleDefaultON
  Scenario Outline: Check toggle is ON by default and next item begins loading
    Then I enter "<mode>"
    And CPP shows
    And I wait for countdown to finish
    And I can resume past News blocking guidance in "<mode>"
    And I can pause

  Examples:
    | mode       |
    | inline     |

  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  @ToggleTurnedOFF
  Scenario: Check next item does not play if user turns autoplay OFF
    And I pause
    And I toggle CPP OFF
    And I play
    And CPP shows WITHOUT cancel options

