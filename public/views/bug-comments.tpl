<div>
  <ul id="comments"></ul>
  <form>
    <div class="row" hidden>
      <div>Assigned:<br /><input type="text" id="assigned" /></div>
      <input type="button" value="Take Bug" id="take" class="btn sidebtn" />
    </div>
    <div class="row">
      <label>Component:</label>
      <select id="component">
        <option value="AudioChannel" id="v1817_component">AudioChannel</option>
        <option value="BetaTriage" id="v1802_component">BetaTriage</option>
        <option value="Bluetooth" id="v1676_component">Bluetooth</option>
        <option value="Certification Suite" id="v1990_component">Certification Suite</option>
        <option value="Developer Tools" id="v2117_component">Developer Tools</option>
        <option value="Emulator" id="v1821_component">Emulator</option>
        <option value="FindMyDevice" id="v1839_component">FindMyDevice</option>
        <option value="FxA" id="v1882_component">FxA</option>
        <option value="Gaia" id="v1551_component">Gaia</option>
        <option value="Gaia::Achievements" id="v2227_component">Gaia::Achievements</option>
        <option value="Gaia::Bluetooth" id="v1612_component">Gaia::Bluetooth</option>
        <option value="Gaia::Bookmark" id="v2086_component">Gaia::Bookmark</option>
        <option value="Gaia::Browser" id="v1556_component">Gaia::Browser</option>
        <option value="Gaia::Bugzilla Lite" id="v2193_component">Gaia::Bugzilla Lite</option>
        <option value="Gaia::Build" id="v1966_component">Gaia::Build</option>
        <option value="Gaia::Calendar" id="v1555_component">Gaia::Calendar</option>
        <option value="Gaia::Camera" id="v1601_component">Gaia::Camera</option>
        <option value="Gaia::Clock" id="v1602_component">Gaia::Clock</option>
        <option value="Gaia::Components" id="v2064_component">Gaia::Components</option>
        <option value="Gaia::Contacts" id="v1603_component">Gaia::Contacts</option>
        <option value="Gaia::Cost Control" id="v1604_component">Gaia::Cost Control</option>
        <option value="Gaia::Customizer" id="v2223_component" selected="selected">Gaia::Customizer</option>
        <option value="Gaia::Dialer" id="v1605_component">Gaia::Dialer</option>
        <option value="Gaia::E-Mail" id="v1557_component">Gaia::E-Mail</option>
        <option value="Gaia::Everything.me" id="v1618_component">Gaia::Everything.me</option>
        <option value="Gaia::Feedback" id="v2185_component">Gaia::Feedback</option>
        <option value="Gaia::First Time Experience" id="v1615_component">Gaia::First Time Experience</option>
        <option value="Gaia::FMRadio" id="v1606_component">Gaia::FMRadio</option>
        <option value="Gaia::Foxfooding" id="v2228_component">Gaia::Foxfooding</option>
        <option value="Gaia::Gallery" id="v1607_component">Gaia::Gallery</option>
        <option value="Gaia::GithubBot" id="v1813_component">Gaia::GithubBot</option>
        <option value="Gaia::Hackerplace" id="v2225_component">Gaia::Hackerplace</option>
        <option value="Gaia::Homescreen" id="v1597_component">Gaia::Homescreen</option>
        <option value="Gaia::Keyboard" id="v1617_component">Gaia::Keyboard</option>
        <option value="Gaia::L10n" id="v1985_component">Gaia::L10n</option>
        <option value="Gaia::Loop" id="v1971_component">Gaia::Loop</option>
        <option value="Gaia::Music" id="v1608_component">Gaia::Music</option>
        <option value="Gaia::Network Alerts" id="v2120_component">Gaia::Network Alerts</option>
        <option value="Gaia::Notes" id="v1914_component">Gaia::Notes</option>
        <option value="Gaia::P2P Sharing" id="v2224_component">Gaia::P2P Sharing</option>
        <option value="Gaia::PDF Viewer" id="v1609_component">Gaia::PDF Viewer</option>
        <option value="Gaia::PerformanceTest" id="v1943_component">Gaia::PerformanceTest</option>
        <option value="Gaia::Project Infrastructure" id="v2251_component">Gaia::Project Infrastructure</option>
        <option value="Gaia::Ringtones" id="v1884_component">Gaia::Ringtones</option>
        <option value="Gaia::Search" id="v1915_component">Gaia::Search</option>
        <option value="Gaia::Settings" id="v1596_component">Gaia::Settings</option>
        <option value="Gaia::Shared" id="v2131_component">Gaia::Shared</option>
        <option value="Gaia::SMS" id="v1610_component">Gaia::SMS</option>
        <option value="Gaia::System" id="v1598_component">Gaia::System</option>
        <option value="Gaia::System::Accessibility" id="v2222_component">Gaia::System::Accessibility</option>
        <option value="Gaia::System::Audio Mgmt" id="v2209_component">Gaia::System::Audio Mgmt</option>
        <option value="Gaia::System::Browser Chrome" id="v1844_component">Gaia::System::Browser Chrome</option>
        <option value="Gaia::System::Download" id="v2216_component">Gaia::System::Download</option>
        <option value="Gaia::System::Input Mgmt" id="v1887_component">Gaia::System::Input Mgmt</option>
        <option value="Gaia::System::Lockscreen" id="v1616_component">Gaia::System::Lockscreen</option>
        <option value="Gaia::System::Mobile Connection" id="v2220_component">Gaia::System::Mobile Connection</option>
        <option value="Gaia::System::MobileID" id="v2218_component">Gaia::System::MobileID</option>
        <option value="Gaia::System::Music Control" id="v2212_component">Gaia::System::Music Control</option>
        <option value="Gaia::System::Payments" id="v2217_component">Gaia::System::Payments</option>
        <option value="Gaia::System::Power Mgmt" id="v2208_component">Gaia::System::Power Mgmt</option>
        <option value="Gaia::System::SIM Tool Kit" id="v2221_component">Gaia::System::SIM Tool Kit</option>
        <option value="Gaia::System::Status bar, Utility tray, Notification" id="v2214_component">Gaia::System::Status bar, Utility tray, Notification</option>
        <option value="Gaia::System::Storage Mgmt" id="v2211_component">Gaia::System::Storage Mgmt</option>
        <option value="Gaia::System::System UI" id="v2213_component">Gaia::System::System UI</option>
        <option value="Gaia::System::Task Manager" id="v2215_component">Gaia::System::Task Manager</option>
        <option value="Gaia::System::WebRTC" id="v2210_component">Gaia::System::WebRTC</option>
        <option value="Gaia::System::Wifi" id="v2219_component">Gaia::System::Wifi</option>
        <option value="Gaia::System::Window Mgmt" id="v1836_component">Gaia::System::Window Mgmt</option>
        <option value="Gaia::TestAgent" id="v1823_component">Gaia::TestAgent</option>
        <option value="Gaia::Theme Editor" id="v2226_component">Gaia::Theme Editor</option>
        <option value="Gaia::TV" id="v2172_component">Gaia::TV</option>
        <option value="Gaia::TV::Home" id="v2173_component">Gaia::TV::Home</option>
        <option value="Gaia::TV::System" id="v2174_component">Gaia::TV::System</option>
        <option value="Gaia::UI Tests" id="v1819_component">Gaia::UI Tests</option>
        <option value="Gaia::Video" id="v1611_component">Gaia::Video</option>
        <option value="Gaia::VoiceControl" id="v2240_component">Gaia::VoiceControl</option>
        <option value="Gaia::Wallpaper" id="v1885_component">Gaia::Wallpaper</option>
        <option value="Gaia::Wappush" id="v1920_component">Gaia::Wappush</option>
        <option value="General" id="v1359_component">General</option>
        <option value="GonkIntegration" id="v1517_component">GonkIntegration</option>
        <option value="Hardware" id="v1528_component">Hardware</option>
        <option value="Infrastructure" id="v2084_component">Infrastructure</option>
        <option value="MCTS Waiver Request" id="v2072_component">MCTS Waiver Request</option>
        <option value="MTBF" id="v2062_component">MTBF</option>
        <option value="MTP/UMS" id="v2108_component">MTP/UMS</option>
        <option value="NFC" id="v1767_component">NFC</option>
        <option value="Performance" id="v1963_component">Performance</option>
        <option value="RIL" id="v1820_component">RIL</option>
        <option value="RTSP" id="v1968_component">RTSP</option>
        <option value="Runtime" id="v1962_component">Runtime</option>
        <option value="Simulator" id="v1930_component">Simulator</option>
        <option value="Stability" id="v2061_component">Stability</option>
        <option value="Sync" id="v2236_component">Sync</option>
        <option value="Vendcom" id="v1621_component">Vendcom</option>
        <option value="Wifi" id="v1622_component">Wifi</option>
      </select>
    </div>
    <div class="row">
      <label>Status:</label>
      <select id="status">
        <option>UNCONFIRMED</option>
        <option>NEW</option>
        <option>ASSIGNED</option>
        <option>RESOLVED - FIXED</option>
        <option>RESOLVED - INVALID</option>
        <option>RESOLVED - WONTFIX</option>
        <option>RESOLVED - INCOMPLETE</option>
      </select>
    </div>
    <textarea placeholder="Reply..." id="commentInput"></textarea>
    <input type="text" placeholder="Need More Information" id="needinfo" />
    <div id="pickAttachmentsForm" style="margin-bottom: 1rem;">
      <label class="row">
        <input type="checkbox" id="feature"></input>
        <span>This is a feature request.</span>
      </label>
      <label class="row">
        <input type="checkbox" id="ux"></input>
        <span>This needs UX input.</span>
      </label>
      <label class="row">
        <input type="checkbox" id="webcompat"></input>
        <span>This may be a web compatibility issue.</span>
      </label>
      <label class="row">
        <input type="checkbox" id="platform"></input>
        <span>This looks like a platform issue.</span>
      </label>
      <label class="row">
        <input type="checkbox" id="duplicate"></input>
        <span>I think this is a duplicate.</span>
      </label>
    </div>
    <button type="button" id="skip" style="margin-bottom: 10px;">I don't know, skip this bug</button>
    <input type="submit" value="Done triaging, save changes" />
  </form>
</div>
