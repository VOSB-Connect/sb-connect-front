<nav aria-label="top bar" class="flex-none flex justify-between bg-white h-16">
    <!-- top bar left -->
    <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
      <!-- add button -->
      <li class="group relative">
        <button aria-controls="add" aria-expanded="false" aria-haspopup="listbox" class="flex items-center h-full px-4 text-sm">
          <i>
            <svg class="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
            </svg>
          </i>
          <span class="ml-2">Add</span>
        </button>
        <span class="absolute p-1 hidden group-hover:block z-20">
          <ul id="add" role="listbox" class="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed">
            <li role="separator" class="mb-2">
              <label class="block px-4 py-3 font-semibold">
                New
              </label>
              <hr />
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              Ticket
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              User
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              Organization
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              Search
            </li>
            <li role="separator" class="mb-2">
              <label class="block px-4 py-3 font-semibold">Recently Viewed</label>
              <hr />
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              <div class="flex">
                <div class="pr-2">
                  <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-red-600 text-white leading-none">O</span>
                </div>
                <div class="flex-1">
                  <p>Vertias - ams opps issue</p>
                  <p class="text-gray-600">
                    <span>#ticket/14352</span>
                    <span class="mx-1 font-black">&#183;</span>
                    <span>Nico Braun</span>
                  </p>
                </div>
              </div>
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              <div class="flex">
                <div class="pr-2">
                  <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-yellow-400 text-black leading-none">N</span>
                </div>
                <div class="flex-1">
                  <p>Vertias - ams opps issue</p>
                  <p class="text-gray-600">
                    <span>#ticket/14352</span>
                    <span class="mx-1 font-black">&#183;</span>
                    <span>Nico Braun</span>
                  </p>
                </div>
              </div>
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              <div class="flex">
                <div class="pr-2">
                  <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-gray-500 text-white leading-none">S</span>
                </div>
                <div class="flex-1">
                  <p>Vertias - ams opps issue</p>
                  <p class="text-gray-600">
                    <span>#ticket/14352</span>
                    <span class="mx-1 font-black">&#183;</span>
                    <span>Nico Braun</span>
                  </p>
                </div>
              </div>
            </li>
            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              <div class="flex">
                <div class="pr-2">
                  <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-blue-600 text-white leading-none">P</span>
                </div>
                <div class="flex-1">
                  <p>Vertias - ams opps issue</p>
                  <p class="text-gray-600">
                    <span>#ticket/14352</span>
                    <span class="mx-1 font-black">&#183;</span>
                    <span>Nico Braun</span>
                  </p>
                </div>
              </div>
            </li>

            <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
              <div class="flex">
                <div class="pr-2">
                  <span style="padding: 2px 5px; font-size: 0.7rem;" class="font-mono rounded-sm bg-gray-800 text-white leading-none">H</span>
                </div>
                <div class="flex-1">
                  <p>Vertias - ams opps issue</p>
                  <p class="text-gray-600">
                    <span>#ticket/14352</span>
                    <span class="mx-1 font-black">&#183;</span>
                    <span>Nico Braun</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </span>
      </li>
    </ul>

    <!-- to bar right  -->
    <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
      <li class="h-8 w-8 ml-3">
        <button title="Notifications" aria-label="notifications" class="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline">
          <i>
            <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
            </svg>
          </i>
        </button>
      </li>
    </ul>
  </nav>