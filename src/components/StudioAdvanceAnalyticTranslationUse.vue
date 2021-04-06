<template>
  <div class="studioAdvanceAnalyticVideo">
    <div class="studio__absolute__advance__graph">
      <div class="studio__absolute__advance__graph__option">
        <div class="studio__absolute__advance__graph__option__left">
          <div
            class="studio__absolute__advance__graph__option__left__filter"
            @click.stop="switchFirstMetric"
          >
            <div
              class="studio__absolute__advance__graph__option__left__filter__text"
            >
              Views by Video
            </div>
            <div
              class="studio__absolute__advance__graph__option__left__filter__icon"
            >
              <i class="fas fa-caret-down"></i>
            </div>
            <div
              class="studio__absolute__advance__graph__option__left__filter__absolute"
              v-show="expandFirstMetric"
            >
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Views
              </div>
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Watch time (hours)
              </div>
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Average view duration
              </div>

              <hr />
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__listLast"
                @mouseover="openExpandMetric"
                @mouseleave="closeExpandMetric"
              >
                <div
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__text"
                >
                  More metrics
                </div>
                <div
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__icon"
                >
                  <i class="fas fa-caret-right"></i>
                </div>
                <div
                  v-if="expandMetrics"
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand"
                >
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Overview
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Watch time (hours)
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Views
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average view duration
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average percentage viewed
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Videos added
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Videos published
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Reach
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Impressions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Impressions click-through rate
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Uniques viewers
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average views per viewer
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Premium
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube Premium views
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube Premium watch time (hours)
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your transaction revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Transactions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your revenue per transaction
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your YouTube Premium revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated ad revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube ad revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated Doubleclick revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated AdSense revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Ad impressions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      CPM
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playback based CPM
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Estimated monetized playbacks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      RPM
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Interactions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers gained
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers lost
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Likes
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Dislikes
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Likes (vs. dislikes)
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Shares
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Comments added
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Playlists
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist starts
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist exits
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist exit rate
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average time in playlist
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Views per playlist start
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Cards
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Cards clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Cards shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Clicks per card shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Card teaser clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Card teasers shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Teaser clicks per card teaser shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Endscreens
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      End screen element clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      End screen elements shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Clicks per end screen element shown
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="studio__absolute__advance__graph__option__left__filter"
            @click.stop="switchSecondMetric"
          >
            <div
              class="studio__absolute__advance__graph__option__left__filter__text"
            >
              Select Secondary Metric
            </div>
            <div
              class="studio__absolute__advance__graph__option__left__filter__icon"
            >
              <i class="fas fa-caret-down"></i>
            </div>
            <div
              class="studio__absolute__advance__graph__option__left__filter__absolute"
              v-show="expandSecondMetric"
            >
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                None
              </div>
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Views
              </div>
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Watch time (hours)
              </div>
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__list"
              >
                Average view duration
              </div>
              <hr />
              <div
                class="studio__absolute__advance__graph__option__left__filter__absolute__listLast"
                @mouseover="openExpandMetric"
                @mouseleave="closeExpandMetric"
              >
                <div
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__text"
                >
                  More metrics
                </div>
                <div
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__icon"
                >
                  <i class="fas fa-caret-right"></i>
                </div>
                <div
                  v-if="expandMetrics"
                  class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand second--expand"
                >
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Overview
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Watch time (hours)
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Views
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average view duration
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average percentage viewed
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Videos added
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Videos published
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Reach
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Impressions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Impressions click-through rate
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Uniques viewers
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average views per viewer
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Premium
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube Premium views
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube Premium watch time (hours)
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your transaction revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Transactions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your revenue per transaction
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your YouTube Premium revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated ad revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      YouTube ad revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated Doubleclick revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Your estimated AdSense revenue
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Ad impressions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      CPM
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playback based CPM
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Estimated monetized playbacks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      RPM
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Interactions
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers gained
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Subscribers lost
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Likes
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Dislikes
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Likes (vs. dislikes)
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Shares
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Comments added
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Playlists
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist starts
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist exits
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Playlist exit rate
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Average time in playlist
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Views per playlist start
                    </div>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column"
                  >
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Cards
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Cards clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Cards shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Clicks per card shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Card teaser clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Card teasers shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Teaser clicks per card teaser shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title"
                    >
                      Endscreens
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      End screen element clicks
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      End screen elements shown
                    </div>
                    <div
                      class="studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text"
                    >
                      Clicks per end screen element shown
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="studio__absolute__advance__graph__option__right">
          <div
            class="studio__absolute__advance__graph__option__right__type"
            @click.stop="switchThirdMetric"
          >
            <div
              class="studio__absolute__advance__graph__option__right__type__text"
            >
              <div
                class="studio__absolute__advance__graph__option__right__type__text__icon"
              >
                <i class="fas fa-chart-area"></i>
              </div>
              <div
                class="studio__absolute__advance__graph__option__right__type__text__text"
              >
                Line chart
              </div>
              <div
                class="studio__absolute__advance__graph__option__right__type__text__absolute"
                v-if="expandThirdMetric"
              >
                <div
                  class="studio__absolute__advance__graph__option__right__type__text__absolute__list"
                >
                  <div
                    class="studio__absolute__advance__graph__option__right__type__text__absolute__list__icon"
                  >
                    <i class="fas fa-chart-area"></i>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__right__type__text__absolute__list__text"
                  >
                    Line chart
                  </div>
                </div>
                <div
                  class="studio__absolute__advance__graph__option__right__type__text__absolute__list"
                >
                  <div
                    class="studio__absolute__advance__graph__option__right__type__text__absolute__list__icon"
                  >
                    <i class="fas fa-chart-bar"></i>
                  </div>
                  <div
                    class="studio__absolute__advance__graph__option__right__type__text__absolute__list__text"
                  >
                    Bar chart
                  </div>
                </div>
              </div>
            </div>
            <div
              class="studio__absolute__advance__graph__option__right__type__icon"
            >
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div
            class="studio__absolute__advance__graph__option__right__date"
            @click.stop="switchFourthMetric"
          >
            <div
              class="studio__absolute__advance__graph__option__right__date__text"
            >
              Daily
            </div>
            <div
              class="studio__absolute__advance__graph__option__right__date__icon"
            >
              <i class="fas fa-caret-down"></i>
            </div>
            <div
              class="studio__absolute__advance__graph__option__right__date__absolute"
              v-if="expandFourthMetric"
            >
              <div
                class="studio__absolute__advance__graph__option__right__date__absolute__list"
              >
                Daily
              </div>
              <div
                class="studio__absolute__advance__graph__option__right__date__absolute__list"
              >
                Weekly
              </div>
              <div
                class="studio__absolute__advance__graph__option__right__date__absolute__list"
              >
                Monthly
              </div>
              <div
                class="studio__absolute__advance__graph__option__right__date__absolute__list"
              >
                Yearly
              </div>
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="myChart"
        width="400"
        height="400"
        class="studio__absolute__advance__graph__type"
      ></canvas>
    </div>
    <div class="studio__absolute__advance__table">
      <div class="studio__absolute__advance__table__title">
        <div class="studio__absolute__advance__table__title__text">
          Translation use
          <i class="fas fa-plus-circle"></i>
        </div>

        <div class="studio__absolute__advance__table__title__filterName">
          Views <i class="fas fa-arrow-down"></i>
        </div>
      </div>
      <div class="studio__absolute__advance__table__total">
        <div class="studio__absolute__advance__table__total__text">
          Total
        </div>
        <div class="studio__absolute__advance__table__total__matrix">
          X
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioAdvanceAnalyticTranslationUse",
  props: {
    expandMetrics: {
      type: Boolean,
      required: true
    },
    openExpandMetric: {
      type: Function,
      required: true
    },
    closeExpandMetric: {
      type: Function,
      required: true
    },
    switchFirstMetric: {
      type: Function,
      required: true
    },
    switchSecondMetric: {
      type: Function,
      required: true
    },
    switchThirdMetric: {
      type: Function,
      required: true
    },
    switchFourthMetric: {
      type: Function,
      required: true
    },
    expandFirstMetric: {
      type: Boolean,
      required: true
    },
    expandSecondMetric: {
      type: Boolean,
      required: true
    },
    expandThirdMetric: {
      type: Boolean,
      required: true
    },
    expandFourthMetric: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioAdvanceAnalyticVideo {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studio__absolute__advance__graph {
  width: 100%;
  height: 48%;
  border-bottom: 1px solid lightgrey;
}
.studio__absolute__advance__graph__type {
  width: 97%;
  height: 75%;
  border: 1px solid lightgrey;
  margin: 0 auto;
}
.studio__absolute__advance__graph__option {
  width: 100%;
  height: 15%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studio__absolute__advance__graph__option__left {
  width: 22%;
  height: 100%;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
}
.studio__absolute__advance__graph__option__left__filter {
  width: 45%;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.studio__absolute__advance__graph__option__left__filter:hover {
  cursor: pointer;
}
.studio__absolute__advance__graph__option__left__filter__text {
  font-size: 0.85rem;
}
.studio__absolute__advance__graph__option__left__filter__absolute {
  position: absolute;
  width: 115%;
  min-height: 100%;
  background-color: white;
  box-shadow: 0 0 3px lightgrey;
  top: -2px;
  left: -2px;
  z-index: 10;
}
.studio__absolute__advance__graph__option__left__filter__absolute__list {
  text-align: left;
  font-size: 0.8rem;
  color: black;
  text-indent: 20px;
  height: 30px;
  line-height: 30px;
}
.studio__absolute__advance__graph__option__left__filter__absolute__list:hover {
  background-color: lightgrey;
  cursor: pointer;
}
.studio__absolute__advance__graph__option__left__filter__absolute__listLast {
  text-align: left;
  font-size: 0.8rem;
  color: black;
  text-indent: 20px;
  height: 30px;
  line-height: 30px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.studio__absolute__advance__graph__option__left__filter__absolute__listLast:hover {
  background-color: lightgrey;
  cursor: pointer;
}

.studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand {
  position: absolute;
  width: 900px;
  height: 520px;
  background-color: white;
  box-shadow: 0 0 5px lightgrey;
  left: 219px;
  top: -198px;
  display: flex;
  flex-flow: row nowrap;
}
.second--expand {
  left: 219px;
  top: -228px;
}
.studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column {
  width: 25%;
  height: 100%;
}

.studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__title {
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 10px;
}
.studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text {
  font-size: 0.75rem;
}
.studio__absolute__advance__graph__option__left__filter__absolute__listLast__expand__column__text:hover {
  cursor: pointer;
}

.studio__absolute__advance__graph__option__right {
  width: 15%;
  height: 100%;
  margin-right: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
}
.studio__absolute__advance__graph__option__right__type {
  width: 50%;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.studio__absolute__advance__graph__option__right__type__text {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studio__absolute__advance__graph__option__right__type:hover {
  cursor: pointer;
}
.studio__absolute__advance__graph__option__right__type__text__icon {
  margin: 0 5px;
}

.studio__absolute__advance__graph__option__right__type__icon {
  margin-right: 5px;
}

.studio__absolute__advance__graph__option__right__date {
  width: 30%;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.studio__absolute__advance__graph__option__right__date:hover {
  cursor: pointer;
}

.studio__absolute__advance__graph__option__right__type__text__text,
.studio__absolute__advance__graph__option__right__date__text {
  font-size: 0.85rem;
}

.studio__absolute__advance__graph__option__right__type__text__absolute {
  position: absolute;
  width: 115%;
  height: 60px;
  background-color: white;
  box-shadow: 0 0 5px lightgrey;
  top: -2px;
  left: -2px;
}
.studio__absolute__advance__graph__option__right__type__text__absolute__list {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 0.8rem;
}
.studio__absolute__advance__graph__option__right__type__text__absolute__list__icon {
  margin: 0 10px;
}

.studio__absolute__advance__graph__option__right__date__absolute {
  width: 115px;
  min-height: 100%;
  position: absolute;
  background-color: white;
  box-shadow: 0 0 5px lightgrey;
  top: -2px;
  left: -2px;
  text-align: left;
}
.studio__absolute__advance__graph__option__right__date__absolute__list {
  height: 30px;
  text-indent: 20px;
  line-height: 30px;
  font-size: 0.8rem;
}

.studio__absolute__advance__table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.studio__absolute__advance__table__title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}

.studio__absolute__advance__table__title__text {
  width: 25%;
  height: 50px;
  border-right: 1px solid lightgrey;
  text-align: left;
  text-indent: 25px;
  line-height: 50px;
  font-size: 0.85rem;
  position: relative;
}
.studio__absolute__advance__table__title__text .fa-plus-circle {
  position: absolute;
  right: -10px;
  line-height: 50px;
  color: dodgerblue;
}
.studio__absolute__advance__table__title__text .fa-plus-circle:hover {
  cursor: pointer;
}
.studio__absolute__advance__table__title__filterName {
  width: 10%;
  height: 50px;
  border-right: 1px solid lightgrey;
  text-align: right;
  line-height: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}
.studio__absolute__advance__table__title__filterName .fas {
  line-height: 50px;
  margin: 0 10px;
  font-size: 0.85rem;
}
.studio__absolute__advance__table__total {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__advance__table__total__text {
  width: 25%;
  height: 50px;
  border-right: 1px solid lightgrey;
  text-align: left;
  text-indent: 25px;
  line-height: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}
.studio__absolute__advance__table__total__matrix {
  width: 10%;
  height: 50px;
  border-right: 1px solid lightgrey;
  text-align: center;
  line-height: 50px;
  font-size: 0.85rem;
}
</style>
