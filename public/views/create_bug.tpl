<div>

  <header data-version="1">
    <a class="headerBtn"></a>
    <h2>File a Bug</h2>
    <button class="headerBtn logout" hidden>Logout</button>
    <button class="headerBtn login" hidden>Login</button>
  </header>

  <form id="createBug">
    <input type="text" placeholder="Title" id="summary" />
    <input list="components" id="component" value="Gaia::Feedback" disabled hidden />
    <textarea placeholder="Description" id="description" ></textarea>

    <span class="btn-file attachBtn attach">
      <input type="file" multiple />
      <span>Add an Attachment</span>
    </span>
    <ul class="attachments"></ul>

    <input type="submit" value="Submit Bug" />
  </form>

</div>
