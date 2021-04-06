<template>
  <div :class="[absoluteAdvancedMode ? 'studio--fixed' : 'studio']">
    <div class="studio__nav">
      <div class="studio__nav__channel">
        <div class="studio__nav__channel__profile">
          <img
            :src="profile"
            alt="profile picture"
            class="studio__nav__channel__profile__image"
          />
        </div>
        <div class="studio__nav__channel__yourChannel">Your channel</div>
        <div class="studio__nav__channel__name">REdi</div>
      </div>
      <div class="studio__nav__wrap">
        <div class="studio__nav__wrap__actions">
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToDashboard"
          >
            <div
              v-if="dashboard"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[dashboard ? 'fas fa-th-large red' : 'fas fa-th-large']"
              ></i>
            </div>
            <div
              :class="[
                dashboard
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Dashboard
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToContent"
          >
            <div
              v-if="content"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i :class="[content ? 'fas fa-video red' : 'fas fa-video']"></i>
            </div>
            <div
              :class="[
                content
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Content
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToPlaylist"
          >
            <div
              v-if="playlist"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[playlist ? 'fas fa-list-ol red' : 'fas fa-list-ol']"
              ></i>
            </div>
            <div
              :class="[
                playlist
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Playlists
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToAnalytics"
          >
            <div
              v-if="analytics"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  analytics ? 'far fa-chart-bar red' : 'far fa-chart-bar'
                ]"
              ></i>
            </div>
            <div
              :class="[
                analytics
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Analytics
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToComments"
          >
            <div
              v-if="comments"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  comments ? 'fas fa-comment-alt red' : 'fas fa-comment-alt'
                ]"
              ></i>
            </div>
            <div
              :class="[
                comments
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Comments
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToSubtitles"
          >
            <div
              v-if="subtitles"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  subtitles
                    ? 'fas fa-closed-captioning red'
                    : 'fas fa-closed-captioning'
                ]"
              ></i>
            </div>
            <div
              :class="[
                subtitles
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Subtitles
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToCopyright"
          >
            <div
              v-if="copyright"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  copyright ? 'fas fa-copyright red' : 'fas fa-copyright'
                ]"
              ></i>
            </div>
            <div
              :class="[
                copyright
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Copyright
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToMonetization"
          >
            <div
              v-if="monetization"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  monetization ? 'fas fa-dollar-sign red' : 'fas fa-dollar-sign'
                ]"
              ></i>
            </div>
            <div
              :class="[
                monetization
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Monetization
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToCustomization"
          >
            <div
              v-if="customization"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[customization ? 'fas fa-magic red' : 'fas fa-magic']"
              ></i>
            </div>
            <div
              :class="[
                customization
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Customization
            </div>
          </div>
          <div
            class="studio__nav__wrap__actions__list"
            @click="switchToAudioLibrary"
          >
            <div
              v-if="audioLibrary"
              class="studio__nav__wrap__actions__list__block"
            ></div>
            <div class="studio__nav__wrap__actions__list__icon">
              <i
                :class="[
                  audioLibrary ? 'fas fa-file-audio red' : 'fas fa-file-audio '
                ]"
              ></i>
            </div>
            <div
              :class="[
                audioLibrary
                  ? 'studio__nav__wrap__actions__list__text red'
                  : 'studio__nav__wrap__actions__list__text'
              ]"
            >
              Audio library
            </div>
          </div>
        </div>
        <div class="studio__nav__wrap__more">
          <div class="studio__nav__wrap__more__list" @click="switchSetting">
            <div class="studio__nav__wrap__more__list__icon">
              <i class="fas fa-cog"></i>
            </div>
            <div class="studio__nav__wrap__more__list__text">Settings</div>
          </div>
          <div class="studio__nav__wrap__more__list">
            <div class="studio__nav__wrap__more__list__icon">
              <i class="fas fa-exclamation-circle"></i>
            </div>
            <div
              class="studio__nav__wrap__more__list__text"
              @click="switchFeedBack"
            >
              Send feedback
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="studio__content" :style="{ width: widthSize + 'px' }">
      <StudioDashboard
        v-if="dashboard"
        :uploadSwitch="uploadSwitch"
        :switchAnalytics="switchToAnalytics"
      />
      <StudioContent v-if="content" :uploadSwitch="uploadSwitch" />
      <StudioPlaylists v-if="playlist" />
      <StudioAnalytics v-if="analytics" :switchToAdvance="switchToAdvance" />
      <StudioComments v-if="comments" />
      <StudioSubtitles v-if="subtitles" />
      <StudioCopyright v-if="copyright" />
      <StudioMonetization v-if="monetization" />
      <StudioCustomization v-if="customization" />
      <AudioLibrary v-if="audioLibrary" />
    </div>
    <div v-if="absoluteDisplay" class="studio__absolute">
      <div class="studio__absolute__setting">
        <div class="studio__absolute__setting__title">
          <div class="studio__absolute__setting__title__text">Settings</div>
        </div>
        <div class="studio__absolute__setting__content">
          <div class="studio__absolute__setting__content__left">
            <div
              :class="[
                settingGeneral
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingGeneral"
            >
              General
            </div>
            <div
              :class="[
                settingChannel
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingChannel"
            >
              Channel
            </div>
            <div
              :class="[
                settingUploadDefault
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingUploadDefault"
            >
              Upload defaults
            </div>
            <div
              :class="[
                settingPermissions
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingPermissions"
            >
              Permissions
            </div>
            <div
              :class="[
                settingCommunity
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingCommunity"
            >
              Community
            </div>
            <div
              :class="[
                settingAgreements
                  ? 'studio__absolute__setting__content__left__list list--active'
                  : 'studio__absolute__setting__content__left__list'
              ]"
              @click="switchToSettingAgreement"
            >
              Agreements
            </div>
          </div>
          <div class="studio__absolute__setting__content__right">
            <!-- content of setting for each nav click -->
            <StudioSettingGeneral v-if="settingGeneral" />
            <StudioSettingChannel v-if="settingChannel" />
            <StudioSettingUploadDefault v-if="settingUploadDefault" />
            <StudioSettingPermissions v-if="settingPermissions" />
            <StudioSettingCommunity v-if="settingCommunity" />
            <StudioSettingAgreements v-if="settingAgreements" />
          </div>
        </div>
        <div class="studio__absolute__setting__bottom">
          <div
            class="studio__absolute__setting__bottom__close"
            @click="switchSetting"
          >
            CLOSE
          </div>
          <div class="studio__absolute__setting__bottom__save">SAVE</div>
        </div>
      </div>
    </div>
    <div
      v-if="absoluteFeedback"
      class="studio__absolute studio__absolute--feedback"
    >
      <div class="studio__absolute__wrap">
        <StudioSendFeedback :closeFeedback="switchFeedBack" />
      </div>
    </div>
    <div v-if="absoluteUploads" class="studio__absolute">
      <div class="studio__absolute__uploads">
        <div class="studio__absolute__uploads__head">
          <div class="studio__absolute__uploads__head__left">
            <div class="studio__absolute__uploads__head__left__title">
              Upload videos
            </div>
          </div>
          <div class="studio__absolute__uploads__head__right">
            <div
              class="studio__absolute__uploads__head__right__icon"
              @click="switchFeedBack"
            >
              <i class="fas fa-comment-alt"></i>
            </div>
            <div
              class="studio__absolute__uploads__head__right__close"
              @click="uploadSwitch"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div class="studio__absolute__uploads__content">
          <form class="studio__absolute__uploads__content__wrap">
            <div
              class="studio__absolute__uploads__content__wrap__uploads"
              @click="uploadButton"
            >
              <i class="fas fa-upload"></i>
            </div>
            <div class="studio__absolute__uploads__content__wrap__text">
              Drag and drop video files to upload
            </div>
            <div class="studio__absolute__uploads__content__wrap__subText">
              Your videos will be private until you publish them.
            </div>
            <button
              class="studio__absolute__uploads__content__wrap__uploadButton"
              @click="uploadButton"
            >
              SELECT A FILE
            </button>
            <input
              type="file"
              id="video_uploads"
              name="video_uploads"
              class="studio__absolute__uploads__content__wrap__inputFile"
            />
          </form>
        </div>
        <div class="studio__absolute__uploads__bottom">
          <div class="studio__absolute__uploads__bottom__text">
            By submitting your videos to YouTube, you acknowledge that you agree
            to YouTube's <span class="link__tag">Terms of Service</span> and
            <span class="link__tag">Community Guidelines.</span>
          </div>
          <div class="studio__absolute__uploads__bottom__text">
            Please be sure not to violate others' copyright or privacy rights.
            <span class="link__tag">Learn more</span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="absoluteAdvancedMode"
      class="studio__absolute"
      @click="closeFirstMetric"
    >
      <div class="studio__absolute__advance" @click="headExpandMore = false">
        <div class="studio__absolute__advance__functions">
          <div class="studio__absolute__advance__functions__export">
            <i class="fas fa-download"></i>
          </div>
          <div class="studio__absolute__advance__functions__feedback">
            <i class="fas fa-comment-alt"></i>
          </div>
          <div
            class="studio__absolute__advance__functions__close"
            @click="switchToAdvance"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="studio__absolute__advance__channel">
          <div class="studio__absolute__advance__channel__wrap">
            <div class="studio__absolute__advance__channel__wrap__info">
              <img
                :src="profile"
                alt="profile pic"
                class="studio__absolute__advance__channel__wrap__info__profile"
              />
              <div class="studio__absolute__advance__channel__wrap__info__text">
                <div
                  class="studio__absolute__advance__channel__wrap__info__text__channel"
                >
                  Channel
                </div>
                <div
                  class="studio__absolute__advance__channel__wrap__info__text__channelSearch"
                >
                  <input
                    type="text"
                    name="searchAcrossChannel"
                    id="searchAcrossChannel"
                    placeholder="REdi"
                    class="studio__absolute__advance__channel__wrap__info__text__channelSearch__input"
                  />
                  <button
                    class="studio__absolute__advance__channel__wrap__info__text__channelSearch__search"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="studio__absolute__advance__channel__wrap__compare">
              COMPARE TO...
            </div>
          </div>
        </div>
        <div class="studio__absolute__advance__filters">
          <div class="studio__absolute__advance__filters__icon">
            <i class="fas fa-sliders-h"></i>
          </div>
          <div class="studio__absolute__advance__filters__input">
            <input
              type="text"
              class="studio__absolute__advance__filters__input__text"
              placeholder="Filter"
            />
          </div>
          <div class="studio__absolute__advance__filters__date">
            <div class="studio__absolute__advance__filters__date__text">
              Dec 12, 2020 - Mar 11, 2021
            </div>
            <select class="studio__absolute__advance__filters__date__select">
              <option value="Last 90 days">Last 90 days</option>
              <option value="Last 60 days">Last 60 days</option>
              <option value="Last 30 days">Last 30 days</option>
            </select>
          </div>
        </div>
        <div class="studio__absolute__advance__head">
          <div
            :class="[
              AdvanceAnalyticVideo
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToVideo"
          >
            Video
          </div>
          <div
            :class="[
              AdvanceAnalyticTraffic
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToTraffic"
          >
            Traffic source
          </div>
          <div
            :class="[
              AdvanceAnalyticGeography
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToGeography"
          >
            Geography
          </div>
          <div
            :class="[
              AdvanceAnalyticViewerAge
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToViewerAge"
          >
            Viewer age
          </div>
          <div
            :class="[
              AdvanceAnalyticViewerGender
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToViewerGender"
          >
            Viewer gender
          </div>
          <div
            :class="[
              AdvanceAnalyticDate
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToDate"
          >
            Date
          </div>
          <div
            :class="[
              AdvanceAnalyticPlaylist
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToPlaylist"
          >
            Playlist
          </div>
          <div
            :class="[
              AdvanceAnalyticDeviceType
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToDeviceType"
          >
            Device type
          </div>
          <div
            :class="[
              AdvanceAnalyticProduct
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToYouTubeProduct"
          >
            YouTube product
          </div>
          <div
            :class="[
              AdvanceAnalyticVideoType
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToVideoType"
          >
            Video type
          </div>
          <div
            :class="[
              AdvanceAnalyticPlaybackLocation
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToPlaybackLocation"
          >
            Playback location
          </div>
          <div
            :class="[
              AdvanceAnalyticLast
                ? 'studio__absolute__advance__head__list head--active'
                : 'studio__absolute__advance__head__list'
            ]"
            @click="advanceSwitchToLast"
          >
            {{ headLastText }}
          </div>
          <div
            class="studio__absolute__advance__head__list"
            @click.stop="headExpandMore = true"
          >
            More <i class="fas fa-caret-down"></i>
            <div
              class="studio__absolute__advance__head__list__optionMenu"
              v-show="headExpandMore"
            >
              <div
                v-if="AdvanceAnalyticOperatingSystem == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToOperatingSystem"
              >
                Opearting system
              </div>
              <div
                v-if="AdvanceAnalyticSubtitle == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToSubtitle"
              >
                Subtitles and CC
              </div>
              <div
                v-if="AdvanceAnalyticVideoInfoLanguage == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToVideoInfoLanguage"
              >
                Video info language
              </div>
              <div
                v-if="AdvanceAnalyticTranslationUse == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToTranslationUse"
              >
                Translation use
              </div>
              <div
                v-if="AdvanceAnalyticEndScreenElementType == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToEndScreenElementType"
              >
                End screen element type
              </div>
              <div
                v-if="AdvanceAnalyticEndScreenElement == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToEndScreenElement"
              >
                End screen element
              </div>
              <div
                v-if="AdvanceAnalyticCardType == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToCardType"
              >
                Card type
              </div>
              <div
                v-if="AdvanceAnalyticCard == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToCard"
              >
                Card
              </div>
              <div
                v-if="AdvanceAnalyticSharingService == false"
                class="studio__absolute__advance__head__list__optionMenu__list"
                @click.stop="advanceSwitchToSharingService"
              >
                Sharing service
              </div>
            </div>
          </div>
        </div>
        <StudioAdvanceAnalyticVideo
          v-show="AdvanceAnalyticVideo"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticTraffic
          v-show="AdvanceAnalyticTraffic"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticGeography
          v-show="AdvanceAnalyticGeography"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticViewerAge
          v-show="AdvanceAnalyticViewerAge"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticViewerGender
          v-show="AdvanceAnalyticViewerGender"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticDate
          v-show="AdvanceAnalyticDate"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticPlaylist
          v-show="AdvanceAnalyticPlaylist"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticDeviceType
          v-show="AdvanceAnalyticDeviceType"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticProduct
          v-show="AdvanceAnalyticProduct"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticVideoType
          v-show="AdvanceAnalyticVideoType"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticPlaybackLocation
          v-show="AdvanceAnalyticPlaybackLocation"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticOperatingSystem
          v-show="AdvanceAnalyticOperatingSystem"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticSubtitles
          v-show="AdvanceAnalyticSubtitle"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticVideoInfoLanguage
          v-show="AdvanceAnalyticVideoInfoLanguage"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticTranslationUse
          v-show="AdvanceAnalyticTranslationUse"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticEndScreenElementType
          v-show="AdvanceAnalyticEndScreenElementType"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticEndScreenElement
          v-show="AdvanceAnalyticEndScreenElement"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticCardType
          v-show="AdvanceAnalyticCardType"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticCard
          v-show="AdvanceAnalyticCard"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
        <StudioAdvanceAnalyticSharingService
          v-show="AdvanceAnalyticSharingService"
          :switchFirstMetric="switchFirstMetric"
          :expandFirstMetric="expandFirstMetric"
          :closeExpandMetric="closeExpandMetric"
          :openExpandMetric="openExpandMetric"
          :expandMetrics="expandMetrics"
          :switchSecondMetric="switchSecondMetric"
          :expandSecondMetric="expandSecondMetric"
          :switchThirdMetric="switchThirdMetric"
          :expandThirdMetric="expandThirdMetric"
          :switchFourthMetric="switchFourthMetric"
          :expandFourthMetric="expandFourthMetric"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StudioDashboard from "@/components/StudioDashboard.vue";
import StudioContent from "@/components/StudioContent.vue";
import StudioPlaylists from "@/components/StudioPlaylists.vue";
import StudioAnalytics from "@/components/StudioAnalytics.vue";
import StudioComments from "@/components/StudioComments.vue";
import StudioSubtitles from "@/components/StudioSubtitles.vue";
import StudioCopyright from "@/components/StudioCopyright.vue";
import StudioMonetization from "@/components/StudioMonetization.vue";
import StudioCustomization from "@/components/StudioCustomization.vue";
import AudioLibrary from "@/components/StudioAudio.vue";

import StudioSettingGeneral from "@/components/StudioSettingGeneral.vue";
import StudioSettingChannel from "@/components/StudioSettingChannel.vue";
import StudioSettingUploadDefault from "@/components/StudioSettingUploadDefault.vue";
import StudioSettingPermissions from "@/components/StudioSettingPermissions.vue";
import StudioSettingCommunity from "@/components/StudioSettingCommunity.vue";
import StudioSettingAgreements from "@/components/StudioSettingAgreements.vue";
import StudioSendFeedback from "@/components/StudioSendFeedback.vue";
import StudioAdvanceAnalyticVideo from "@/components/StudioAdvanceAnalyticVideo.vue";
import StudioAdvanceAnalyticTraffic from "@/components/StudioAdvanceAnalyticTraffic.vue";
import StudioAdvanceAnalyticGeography from "@/components/StudioAdvanceAnalyticGeography.vue";
import StudioAdvanceAnalyticViewerAge from "@/components/StudioAdvanceAnalyticViewerAge.vue";
import StudioAdvanceAnalyticViewerGender from "@/components/StudioAdvanceAnalyticViewerGender.vue";
import StudioAdvanceAnalyticDate from "@/components/StudioAdvanceAnalyticDate.vue";
import StudioAdvanceAnalyticPlaylist from "@/components/StudioAdvanceAnalyticPlaylist.vue";
import StudioAdvanceAnalyticDeviceType from "@/components/StudioAdvanceAnalyticDeviceType.vue";
import StudioAdvanceAnalyticProduct from "@/components/StudioAdvanceAnalyticProduct.vue";
import StudioAdvanceAnalyticVideoType from "@/components/StudioAdvanceAnalyticVideoType.vue";
import StudioAdvanceAnalyticPlaybackLocation from "@/components/StudioAdvanceAnalyticPlaybackLocation.vue";
import StudioAdvanceAnalyticOperatingSystem from "@/components/StudioAdvanceAnalyticOperatingSystem.vue";
import StudioAdvanceAnalyticSubtitles from "@/components/StudioAdvanceAnalyticSubtitles.vue";
import StudioAdvanceAnalyticVideoInfoLanguage from "@/components/StudioAdvanceAnalyticVideoInfoLanguage.vue";
import StudioAdvanceAnalyticTranslationUse from "@/components/StudioAdvanceAnalyticTranslationUse.vue";
import StudioAdvanceAnalyticEndScreenElementType from "@/components/StudioAdvanceAnalyticEndScreenElementType.vue";
import StudioAdvanceAnalyticEndScreenElement from "@/components/StudioAdvanceAnalyticEndScreenElement.vue";
import StudioAdvanceAnalyticCardType from "@/components/StudioAdvanceAnalyticCardType.vue";
import StudioAdvanceAnalyticCard from "@/components/StudioAdvanceAnalyticCard.vue";
import StudioAdvanceAnalyticSharingService from "@/components/StudioAdvanceAnalyticSharingService.vue";

import profile from "@/assets/profile.png";

import { onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Studio",
  components: {
    StudioDashboard,
    StudioContent,
    StudioPlaylists,
    StudioAnalytics,
    StudioComments,
    StudioSubtitles,
    StudioCopyright,
    StudioMonetization,
    StudioCustomization,
    AudioLibrary,
    StudioSettingGeneral,
    StudioSettingChannel,
    StudioSettingUploadDefault,
    StudioSettingPermissions,
    StudioSettingCommunity,
    StudioSettingAgreements,
    StudioSendFeedback,
    StudioAdvanceAnalyticVideo,
    StudioAdvanceAnalyticTraffic,
    StudioAdvanceAnalyticGeography,
    StudioAdvanceAnalyticViewerAge,
    StudioAdvanceAnalyticViewerGender,
    StudioAdvanceAnalyticDate,
    StudioAdvanceAnalyticPlaylist,
    StudioAdvanceAnalyticDeviceType,
    StudioAdvanceAnalyticProduct,
    StudioAdvanceAnalyticVideoType,
    StudioAdvanceAnalyticPlaybackLocation,
    StudioAdvanceAnalyticOperatingSystem,
    StudioAdvanceAnalyticSubtitles,
    StudioAdvanceAnalyticVideoInfoLanguage,
    StudioAdvanceAnalyticTranslationUse,
    StudioAdvanceAnalyticEndScreenElementType,
    StudioAdvanceAnalyticEndScreenElement,
    StudioAdvanceAnalyticCardType,
    StudioAdvanceAnalyticCard,
    StudioAdvanceAnalyticSharingService
  },
  props: {
    changeCurrentRoute: Function
  },
  setup(props) {
    const state = reactive({
      widthSize: null,
      absoluteDisplay: false,
      absoluteFeedback: false,
      absoluteUploads: false,
      absoluteAdvancedMode: false,
      dashboard: true,
      content: false,
      playlist: false,
      analytics: false,
      comments: false,
      subtitles: false,
      copyright: false,
      monetization: false,
      customization: false,
      audioLibrary: false,
      settingGeneral: false,
      settingChannel: false,
      settingUploadDefault: false,
      settingPermissions: false,
      settingCommunity: false,
      settingAgreements: true,
      expandMetrics: false,
      expandFirstMetric: false,
      expandSecondMetric: false,
      expandThirdMetric: false,
      expandFourthMetric: false,
      headExpandMore: false,
      headLastText: "Operating System",
      AdvanceAnalyticVideo: false,
      AdvanceAnalyticTraffic: false,
      AdvanceAnalyticGeography: false,
      AdvanceAnalyticViewerAge: false,
      AdvanceAnalyticViewerGender: false,
      AdvanceAnalyticDate: false,
      AdvanceAnalyticPlaylist: false,
      AdvanceAnalyticDeviceType: false,
      AdvanceAnalyticProduct: false,
      AdvanceAnalyticVideoType: false,
      AdvanceAnalyticPlaybackLocation: false,
      AdvanceAnalyticLast: true,
      AdvanceAnalyticOperatingSystem: true,
      AdvanceAnalyticSubtitle: false,
      AdvanceAnalyticVideoInfoLanguage: false,
      AdvanceAnalyticTranslationUse: false,
      AdvanceAnalyticEndScreenElementType: false,
      AdvanceAnalyticEndScreenElement: false,
      AdvanceAnalyticCardType: false,
      AdvanceAnalyticCard: false,
      AdvanceAnalyticSharingService: false
    });

    let name = useRoute().name;
    if (name == "Studio") {
      props.changeCurrentRoute("/studio");
    }

    onMounted(() => {
      alert("This part is static and have unfinish parts (like no graph)");
      window.addEventListener("resize", function() {
        let sizeWidth = document.documentElement.clientWidth;
        sizeWidth -= 256;
        state.widthSize = sizeWidth;
      });
      //chart
    });

    const uploadButton = () => {
      //look for file upload
      let fileUpload = document.querySelector(
        ".studio__absolute__uploads__content__wrap__inputFile"
      );
      //simulate a click
      fileUpload.click();
    };

    const uploadSwitch = () => {
      state.absoluteUploads = !state.absoluteUploads;
    };
    const switchToAdvance = () => {
      state.absoluteAdvancedMode = !state.absoluteAdvancedMode;
    };
    const advanceSwitchToLast = () => {
      state.AdvanceAnalyticLast = true;
      if (state.headLastText == "Operating System") {
        advanceSwitchToOperatingSystem();
      } else if (state.headLastText == "Subtitles and CC") {
        advanceSwitchToSubtitle();
      } else if (state.headLastText == "Video info language") {
        advanceSwitchToVideoInfoLanguage();
      } else if (state.headLastText == "Translation use") {
        advanceSwitchToTranslationUse();
      } else if (state.headLastText == "End screen element type") {
        advanceSwitchToEndScreenElementType();
      } else if (state.headLastText == "End screen element") {
        advanceSwitchToEndScreenElement();
      } else if (state.headLastText == "Card type") {
        advanceSwitchToCardType();
      } else if (state.headLastText == "Card") {
        advanceSwitchToCard();
      } else if (state.headLastText == "Sharing service") {
        advanceSwitchToSharingService();
      }
    };
    const advanceSwitchToOperatingSystem = () => {
      state.headLastText = "Operating System";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = true;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToSubtitle = () => {
      state.headLastText = "Subtitles and CC";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = true;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToVideoInfoLanguage = () => {
      state.headLastText = "Video info language";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = true;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToTranslationUse = () => {
      state.headLastText = "Translation use";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = true;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToEndScreenElementType = () => {
      state.headLastText = "End screen element type";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = true;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToEndScreenElement = () => {
      state.headLastText = "End screen element";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = true;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToCardType = () => {
      state.headLastText = "Card type";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = true;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToCard = () => {
      state.headLastText = "Card";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = true;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
    };
    const advanceSwitchToSharingService = () => {
      state.headLastText = "Sharing service";
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = true;
      state.headExpandMore = false;
    };

    const switchToDashboard = () => {
      state.dashboard = true;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToContent = () => {
      state.dashboard = false;
      state.content = true;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToPlaylist = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = true;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToAnalytics = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = true;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToComments = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = true;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToSubtitles = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = true;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToCopyright = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = true;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToMonetization = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = true;
      state.customization = false;
      state.audioLibrary = false;
    };
    const switchToCustomization = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = true;
      state.audioLibrary = false;
    };
    const switchToAudioLibrary = () => {
      state.dashboard = false;
      state.content = false;
      state.playlist = false;
      state.analytics = false;
      state.comments = false;
      state.subtitles = false;
      state.copyright = false;
      state.monetization = false;
      state.customization = false;
      state.audioLibrary = true;
    };
    const switchSetting = () => {
      state.absoluteDisplay = !state.absoluteDisplay;
    };

    const switchToSettingGeneral = () => {
      state.settingGeneral = true;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingChannel = () => {
      state.settingGeneral = false;
      state.settingChannel = true;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingUploadDefault = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = true;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };

    const switchToSettingPermissions = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = true;
      state.settingCommunity = false;
      state.settingAgreements = false;
    };
    const switchToSettingCommunity = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = true;
      state.settingAgreements = false;
    };

    const switchToSettingAgreement = () => {
      state.settingGeneral = false;
      state.settingChannel = false;
      state.settingUploadDefault = false;
      state.settingPermissions = false;
      state.settingCommunity = false;
      state.settingAgreements = true;
    };

    const switchFeedBack = () => {
      state.absoluteFeedback = !state.absoluteFeedback;
    };
    const switchFirstMetric = () => {
      if (state.expandFirstMetric == true) {
        state.expandFirstMetric = false;
      } else {
        state.expandFirstMetric = true;
      }
    };
    const switchSecondMetric = () => {
      if (state.expandSecondMetric == true) {
        state.expandSecondMetric = false;
      } else {
        state.expandSecondMetric = true;
      }
    };
    const switchThirdMetric = () => {
      if (state.expandThirdMetric == true) {
        state.expandThirdMetric = false;
      } else {
        state.expandThirdMetric = true;
      }
    };
    const switchFourthMetric = () => {
      if (state.expandFourthMetric == true) {
        state.expandFourthMetric = false;
      } else {
        state.expandFourthMetric = true;
      }
    };
    const closeFirstMetric = () => {
      if (state.expandFirstMetric == true) {
        state.expandFirstMetric = false;
      }
      if (state.expandSecondMetric == true) {
        state.expandSecondMetric = false;
      }
      if (state.expandThirdMetric == true) {
        state.expandThirdMetric = false;
      }
      if (state.expandFourthMetric == true) {
        state.expandFourthMetric = false;
      }
    };
    const openExpandMetric = () => {
      state.expandMetrics = true;
    };

    const closeExpandMetric = () => {
      state.expandMetrics = false;
    };

    const advanceSwitchToVideo = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = true;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToTraffic = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = true;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToGeography = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = true;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToViewerAge = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = true;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToViewerGender = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = true;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToDate = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = true;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToPlaylist = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = true;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToDeviceType = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = true;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToYouTubeProduct = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = true;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToVideoType = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = true;
      state.AdvanceAnalyticPlaybackLocation = false;
    };
    const advanceSwitchToPlaybackLocation = () => {
      state.AdvanceAnalyticLast = false;
      state.AdvanceAnalyticOperatingSystem = false;
      state.AdvanceAnalyticSubtitle = false;
      state.AdvanceAnalyticVideoInfoLanguage = false;
      state.AdvanceAnalyticTranslationUse = false;
      state.AdvanceAnalyticEndScreenElementType = false;
      state.AdvanceAnalyticEndScreenElement = false;
      state.AdvanceAnalyticCardType = false;
      state.AdvanceAnalyticCard = false;
      state.AdvanceAnalyticSharingService = false;
      state.headExpandMore = false;
      state.AdvanceAnalyticVideo = false;
      state.AdvanceAnalyticTraffic = false;
      state.AdvanceAnalyticGeography = false;
      state.AdvanceAnalyticViewerAge = false;
      state.AdvanceAnalyticViewerGender = false;
      state.AdvanceAnalyticDate = false;
      state.AdvanceAnalyticPlaylist = false;
      state.AdvanceAnalyticDeviceType = false;
      state.AdvanceAnalyticProduct = false;
      state.AdvanceAnalyticVideoType = false;
      state.AdvanceAnalyticPlaybackLocation = true;
    };

    return {
      ...toRefs(state),
      profile,
      uploadButton,
      uploadSwitch,
      switchToAdvance,
      switchToDashboard,
      switchToContent,
      switchToPlaylist,
      switchToAnalytics,
      switchToComments,
      switchToSubtitles,
      switchToCopyright,
      switchToMonetization,
      switchToCustomization,
      switchToAudioLibrary,
      switchSetting,
      switchToSettingGeneral,
      switchToSettingChannel,
      switchToSettingUploadDefault,
      switchToSettingPermissions,
      switchToSettingCommunity,
      switchToSettingAgreement,
      switchFeedBack,
      switchFirstMetric,
      closeFirstMetric,
      switchSecondMetric,
      switchThirdMetric,
      switchFourthMetric,
      openExpandMetric,
      closeExpandMetric,
      advanceSwitchToVideo,
      advanceSwitchToTraffic,
      advanceSwitchToGeography,
      advanceSwitchToViewerAge,
      advanceSwitchToViewerGender,
      advanceSwitchToDate,
      advanceSwitchToPlaylist,
      advanceSwitchToDeviceType,
      advanceSwitchToYouTubeProduct,
      advanceSwitchToVideoType,
      advanceSwitchToPlaybackLocation,
      advanceSwitchToOperatingSystem,
      advanceSwitchToSubtitle,
      advanceSwitchToVideoInfoLanguage,
      advanceSwitchToTranslationUse,
      advanceSwitchToEndScreenElementType,
      advanceSwitchToEndScreenElement,
      advanceSwitchToCardType,
      advanceSwitchToCard,
      advanceSwitchToSharingService,
      advanceSwitchToLast
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studio {
  width: 100%;
  position: relative;
  font-family: Roboto, Arial, sans-serif;
  color: black;
}
.studio--fixed {
  max-height: 100vh;
  overflow-y: hidden;
}
.studio__absolute {
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(77, 77, 77, 0.7);
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.studio__absolute--feedback {
  z-index: 60;
}
.studio__absolute__setting {
  width: 960px;
  height: 620px;
  background-color: white;
  border-radius: 5px;
}
.studio__absolute__setting__title {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid lightgrey;
}
.studio__absolute__setting__title__text {
  text-align: left;
  text-indent: 25px;
  line-height: 70px;
  font-size: 1.25rem;
  font-weight: 500;
}
.studio__absolute__setting__content {
  width: 100%;
  height: 500px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__setting__content__left {
  width: 30%;
  height: 100%;
  border-right: 1px solid lightgrey;
}
.list--active {
  background-color: rgb(240, 239, 239);
}
.studio__absolute__setting__content__left__list {
  width: 100%;
  height: 50px;
  text-align: left;
  text-indent: 25px;
  line-height: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}
.studio__absolute__setting__content__left__list:hover {
  cursor: pointer;
  background-color: rgb(240, 239, 239);
}
.studio__absolute__setting__content__right {
  width: 70%;
  height: 100%;
}
.studio__absolute__setting__bottom {
  width: 100%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.studio__absolute__setting__bottom__close {
  height: 100%;
  line-height: 50px;
  margin: 0 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
}
.studio__absolute__setting__bottom__close:hover {
  cursor: pointer;
}
.studio__absolute__setting__bottom__save {
  height: 100%;
  line-height: 50px;
  margin: 0 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: grey;
}
.studio__absolute__setting__bottom__save:hover {
  cursor: pointer;
}

/*uploads*/
.studio__absolute__uploads {
  width: 960px;
  height: 880px;
  border-radius: 5px;
  background-color: white;
  z-index: 50;
}
.studio__absolute__uploads__head {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.studio__absolute__uploads__head__left {
  width: 30%;
  height: 100%;
}
.studio__absolute__uploads__head__left__title {
  font-size: 1.25rem;
  text-align: left;
  line-height: 60px;
  text-indent: 22px;
  font-weight: 500;
}
.studio__absolute__uploads__head__right {
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
}
.studio__absolute__uploads__head__right__icon {
  margin: 0 20px;
}
.studio__absolute__uploads__head__right__icon:hover {
  cursor: pointer;
}
.studio__absolute__uploads__head__right__icon .fas {
  font-size: 1.2rem;
}
.studio__absolute__uploads__head__right__close {
  margin: 0 20px 0 0;
}
.studio__absolute__uploads__head__right__close:hover {
  cursor: pointer;
}
.studio__absolute__uploads__head__right__close .fas {
  font-size: 1.5rem;
}
.studio__absolute__uploads__content {
  width: 100%;
  height: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.studio__absolute__uploads__content__wrap {
  width: 300px;
  height: 320px;
}
.studio__absolute__uploads__content__wrap__uploads {
  width: 140px;
  height: 140px;
  background-color: lightgrey;
  margin: 40px auto 30px;
  border-radius: 50%;
}
.studio__absolute__uploads__content__wrap__uploads:hover {
  cursor: pointer;
}
.studio__absolute__uploads__content__wrap__uploads .fa-upload {
  line-height: 140px;
  font-size: 3rem;
}
.studio__absolute__uploads__content__wrap__text {
  font-size: 0.95rem;
}
.studio__absolute__uploads__content__wrap__subText {
  font-size: 0.8rem;
  color: grey;
  margin-top: 5px;
}
.studio__absolute__uploads__content__wrap__uploadButton {
  color: white;
  background-color: #065fd4;
  padding: 10px 10px;
  margin: 15px auto;
  border: unset;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
}
.studio__absolute__uploads__content__wrap__uploadButton:focus {
  outline: unset;
}
.studio__absolute__uploads__content__wrap__uploadButton:hover {
  cursor: pointer;
}
.studio__absolute__uploads__content__wrap__inputFile {
  display: none;
}

.studio__absolute__uploads__bottom {
  width: 100%;
  height: 90px;
}
.studio__absolute__uploads__bottom__text {
  font-size: 0.75rem;
  color: grey;
  margin: 14px 0;
}
.link__tag {
  color: dodgerblue;
}
.link__tag:hover {
  cursor: pointer;
}

/*advanced mode*/
.studio__absolute__advance {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  border: 1px solid red;
  font-family: Roboto, Arial, sans-serif;
}
.studio__absolute__advance__functions {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
}
.studio__absolute__advance__functions__export {
  margin: 0 15px;
}
.studio__absolute__advance__functions__export:hover {
  cursor: pointer;
}
.studio__absolute__advance__functions__feedback {
  margin: 0 15px;
}
.studio__absolute__advance__functions__feedback:hover {
  cursor: pointer;
}
.studio__absolute__advance__functions__close {
  margin: 0 20px 0 15px;
}
.studio__absolute__advance__functions__close:hover {
  cursor: pointer;
}
.studio__absolute__advance__functions__close .fas {
  font-size: 1.4rem;
}

.studio__absolute__advance__channel {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__advance__channel__wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studio__absolute__advance__channel__wrap__info {
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__advance__channel__wrap__info__profile {
  width: 50px;
  height: 100%;
  border-radius: 50%;
  margin: 0 25px 0 45px;
  object-fit: cover;
}
.studio__absolute__advance__channel__wrap__info__text {
  width: 60%;
  height: 100%;
  text-align: left;
}
.studio__absolute__advance__channel__wrap__info__text__channel {
  width: 100%;
  height: 40%;
  font-size: 0.9rem;
  color: grey;
}
.studio__absolute__advance__channel__wrap__info__text__channelSearch {
  width: 100%;
  height: 60%;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studio__absolute__advance__channel__wrap__info__text__channelSearch__input {
  height: 20px;
  width: 80%;
  font-size: 1.5rem;
  border: unset;
}
.studio__absolute__advance__channel__wrap__info__text__channelSearch__input:focus {
  outline: unset;
}
.studio__absolute__advance__channel__wrap__info__text__channelSearch__search {
  height: 95%;
  width: 20%;
  border: unset;
  background-color: transparent;
}
.studio__absolute__advance__channel__wrap__compare {
  width: 10%;
  height: 100%;
  line-height: 65px;
  font-weight: 500;
  font-size: 0.9rem;
  color: dodgerblue;
}
.studio__absolute__advance__channel__wrap__compare:hover {
  cursor: pointer;
}

.studio__absolute__advance__filters {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studio__absolute__advance__filters__icon {
  width: 4%;
  height: 60px;
}
.studio__absolute__advance__filters__icon .fa-sliders-h {
  line-height: 60px;
}
.studio__absolute__advance__filters__input {
  width: 80%;
  height: 60px;
  border-right: 1px solid lightgrey;
}
.studio__absolute__advance__filters__input__text {
  width: 99.5%;
  height: 90%;
  font-size: 1rem;
  border: unset;
}
.studio__absolute__advance__filters__input__text:focus {
  outline: unset;
}
.studio__absolute__advance__filters__date {
  width: 16%;
  height: 60px;
}
.studio__absolute__advance__filters__date__text {
  width: 100%;
  height: 50%;
  text-align: left;
  line-height: 30px;
  font-size: 0.85rem;
  color: grey;
  text-indent: 20px;
}
.studio__absolute__advance__filters__date__select {
  width: 90%;
  height: 50%;
  text-align: left;
  font-size: 1rem;
  border: unset;
  margin-left: 3px;
}
.studio__absolute__advance__filters__date__select:focus {
  outline: unset;
}
.studio__absolute__advance__head {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  box-shadow: 0 1px 3px lightgrey;
}
.studio__absolute__advance__head__list {
  margin: 0 15px 0 25px;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 50px;
  color: rgb(78, 78, 78);
  position: relative;
}
.head--active {
  color: dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
.studio__absolute__advance__head__list .fa-caret-down {
  line-height: 50px;
}
.studio__absolute__advance__head__list:hover {
  cursor: pointer;
  border-bottom: 3px solid dodgerblue;
}
.studio__absolute__advance__head__list__optionMenu {
  position: absolute;
  width: 200px;
  min-height: 100%;
  background-color: white;
  box-shadow: 0 0 5px lightgrey;
  right: 0;
  top: 40px;
}
.studio__absolute__advance__head__list__optionMenu__list {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  text-indent: 25px;
  font-weight: 400;
}
.studio__absolute__advance__head__list__optionMenu__list:hover {
  cursor: pointer;
  background-color: rgb(241, 241, 241);
}
.studio__absolute__advance__head__list__optionMenu__list:first-child {
  margin-top: 5px;
}
.studio__absolute__advance__head__list__optionMenu__list:last-child {
  margin-bottom: 5px;
}

/*nav*/
.studio__nav {
  width: 255px;
  height: 94vh;
  position: fixed;
  border-right: 1px solid lightgrey;
  margin-top: 0px;
}
.studio__nav__channel {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-flow: row wrap;
}
.studio__nav__channel__profile {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 20px auto 10px;
}
.studio__nav__channel__profile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.studio__nav__channel__yourChannel {
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
}
.studio__nav__channel__name {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  color: grey;
}
.studio__nav__wrap {
  width: 100%;
  height: 74vh;
}
.studio__nav__wrap__actions {
  width: 100%;
  height: 53vh;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-items: flex-start;
}
.studio__nav__wrap__actions__list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
}

.studio__nav__wrap__actions__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.studio__nav__wrap__actions__list:first-child {
  margin-top: 10px;
}
.studio__nav__wrap__actions__list__icon {
  width: 30%;
}
.studio__nav__wrap__actions__list__icon .fas {
  line-height: 50px;
  color: rgb(90, 90, 90);
}
.studio__nav__wrap__actions__list__text {
  width: 70%;
  text-align: left;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  color: rgb(90, 90, 90);
  font-size: 0.9rem;
}
.studio__nav__wrap__more {
  width: 100%;
  height: 10vh;
  margin-top: 10.8vh;
}
.studio__nav__wrap__more__list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-flow: row nowrap;
}
.studio__nav__wrap__actions__list__block {
  width: 5px;
  height: 100%;
  background-color: red;
}

.studio__nav__wrap__more__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.studio__nav__wrap__more__list__icon {
  width: 30%;
}
.studio__nav__wrap__more__list__icon .fas {
  line-height: 50px;
  padding-left: 0;
  color: rgb(90, 90, 90);
}
.studio__nav__wrap__more__list__text {
  width: 70%;
  text-align: left;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  color: rgb(90, 90, 90);
  font-size: 0.9rem;
}

.highlight {
  background-color: rgb(235, 232, 232);
  color: red;
}
.studio__nav__wrap__actions__list__icon .red {
  color: red;
}
.red {
  color: red;
}

.studio__content {
  height: 100%;
  min-height: 93.8vh;
  background-color: rgb(255, 255, 255);
  margin-top: 60px;
  margin-left: 256px;
}
.studio__absolute__wrap {
  width: 360px;
  height: 580px;
  background-color: white;
}
</style>
