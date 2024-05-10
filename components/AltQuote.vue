<template>
  <div class="space-y-10 divide-y divide-gray-900/10 max-w-7xl mx-auto p-6 lg:px-8">
    <form name="Online Submission" id="agent-quote" ref="quoteForm" method="POST" enctype="multipart/form-data" netlify>
      <input type="hidden" name="form-name" value="Online Submission" /> 
      <!-- start customer info -->
      <div id="customer" class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Customer Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Enter the personal & contact details of the customer here.</p>
        </div>
        <section class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                  <input required type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input required type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Customer Email</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="customer-phone-number" class="block text-sm font-medium leading-6 text-gray-900">Customer Phone Number</label>
                <div class="mt-2">
                  <input required id="customer-phone-number" name="customer-phone-number" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
  
              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Address Line 1</label>
                <div class="mt-2">
                  <input required type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="col-span-full">
                <label for="street-address-2" class="block text-sm font-medium leading-6 text-gray-900">Address Line 2</label>
                <div class="mt-2">
                  <input type="text" name="street-address-2" id="street-address-2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-2">
              <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
              <div class="mt-2">
                <select id="state" name="state" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option selected value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              </div>
  
              <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                  <input required type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 h-[4.313rem]" />
        </section>
      </div>
      <!-- end customer info -->
  
      <!-- start insurance -->
      <div id="insurance" class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Insurance Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Provide the details of the customer's insurance policy.</p>
        </div>
  
        <section class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-full">
                <label for="carrier-name" class="block text-sm font-medium leading-6 text-gray-900">Insurance Carrier Name</label>
                <div class="mt-2">
                  <input type="text" name="carrier-name" id="carrier-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-2">
                <label for="policy-number" class="block text-sm font-medium leading-6 text-gray-900">Policy #</label>
                <div class="mt-2">
                  <input type="text" name="policy-number" id="policy-number" autocomplete="policy-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-2">
                <label for="claim-number" class="block text-sm font-medium leading-6 text-gray-900">Claim #</label>
                <div class="mt-2">
                  <input type="text" name="claim-number" id="claim-number" autocomplete="claim-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-2">
                <!-- <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Deductible Amount</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div> -->
                <label for="deductible-amount" class="block text-sm font-medium leading-6 text-gray-900">Deductible Amount</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input type="text" name="deductible-amount" id="deductible-amount" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="price-currency">
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span class="text-gray-500 sm:text-sm" id="price-currency">USD</span>
                  </div>
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="cause-of-loss" class="block text-sm font-medium leading-6 text-gray-900">Cause of Loss</label>
                <div class="mt-2">
                  <input type="text" name="cause-of-loss" id="cause-of-loss" autocomplete="cause-of-loss" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="date-of-loss" class="block text-sm font-medium leading-6 text-gray-900">Date of Loss</label>
                <div class="mt-2">
                  <input id="date-of-loss" name="date-of-loss" type="date" autocomplete="date-of-loss" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="sm:col-span-full">
                <label for="reference-number" class="block text-sm font-medium leading-6 text-gray-900">Reference #</label>
                <div class="mt-2">
                  <input type="text" name="reference-number" id="reference-number" autocomplete="reference-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 h-[4.313rem]" />
        </section>
      </div>
      <!-- end insurance -->
  
      <!-- start vehicle info -->
      <div id="vehicle" class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Describe the details of the customer's vehicle.</p>
        </div>
  
        <section class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-3 sm:col-span-2">
                <!-- todo: figure out why spacing not consistent -->
                <label for="year" class="block text-sm font-medium leading-6 text-gray-900">Year</label>
                <div class="mt-2">
                  <input type="text" name="year" id="year" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3 sm:col-span-2">
                <label for="make" class="block text-sm font-medium leading-6 text-gray-900">Make</label>
                <div class="mt-2">
                  <input type="text" name="make" id="make" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3 sm:col-span-2">
                <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Model</label>
                <div class="mt-2">
                  <input type="text" name="model" id="model" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3 sm:col-span-full">
                <label for="vin" class="block text-sm font-medium leading-6 text-gray-900">VIN (Vehicle Identification Number)</label>
                <div class="mt-2">
                  <input type="text" name="vin" id="vin" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              
              <fieldset class="col-span-3">
                <legend class="text-sm font-semibold leading-6 text-gray-900">Body Type</legend>
                <!-- <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> -->
                <div class="mt-6 space-y-6">
                  <div class="flex items-center gap-x-3">
                    <input id="body-twodoor" name="body-type" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="body-twodoor" class="block text-sm font-medium leading-6 text-gray-900">2 Door</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="body-fourdoor" name="body-type" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="body-fourdoor" class="block text-sm font-medium leading-6 text-gray-900">4 Door</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="body-wagon" name="body-type" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="body-wagon" class="block text-sm font-medium leading-6 text-gray-900">Wagon</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="body-other" name="body-type" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="body-other" class="block text-sm font-medium leading-6 text-gray-900">Other</label>
                  </div>
                </div>
              </fieldset>
  
              <fieldset class="col-span-3">
                <legend class="text-sm font-semibold leading-6 text-gray-900">Glass to be Replaced</legend>
                <!-- <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p> -->
                <div class="mt-6 space-y-6">
                  <div class="flex items-center gap-x-3">
                    <input id="glass-windshield" name="glass-replaced" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="glass-windshield" class="block text-sm font-medium leading-6 text-gray-900">Windshield</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="glass-back" name="glass-replaced" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="glass-back" class="block text-sm font-medium leading-6 text-gray-900">Back Glass</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="glass-door" name="glass-replaced" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="glass-door" class="block text-sm font-medium leading-6 text-gray-900">Door Glass</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="glass-other" name="glass-replaced" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="glass-other" class="block text-sm font-medium leading-6 text-gray-900">Other</label>
                  </div>
                </div>
              </fieldset>
              
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 h-[4.313rem]" />
        </section>
      </div>
      <!-- end vehicle info -->
  
      <!-- start agent/dealer info -->
      <div id="dealer" class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Agent & Dealer Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Provide various details about yourself and the transaction, as well as any comments.</p>
        </div>
  
        <section class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <MySelect @chosen="updateRep" class="col-span-3 sm:col-span-full" title="Sunstate Representative" :options="employeeList" />
  
              <div class="hidden">
                <label for="rep-name" class="block text-sm font-medium leading-6 text-gray-900">Sunstate Representative Name</label>
                <div class="mt-2">
                  <input id="rep-name" name="rep-name" type="text" v-model="rep" />
                </div>
              </div>
  
              <div class="col-span-3">
                <label for="agent-email" class="block text-sm font-medium leading-6 text-gray-900">Agent / Dealer Email</label>
                <div class="mt-2">
                  <input required id="agent-email" name="agent-email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3">
                <label for="insurance-agency" class="block text-sm font-medium leading-6 text-gray-900">Insurance Agency Name</label>
                <div class="mt-2">
                  <input id="insurance-agency" name="insurance-agency" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3 sm:col-span-2">
                <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div class="mt-2">
                  <input id="phone-number" name="phone-number" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
  
              <div class="col-span-3 sm:col-span-2">
                <label for="referred-by" class="block text-sm font-medium leading-6 text-gray-900">Referred By</label>
                <div class="mt-2">
                  <input required id="referred-by" name="referred-by" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="col-span-3 sm:col-span-2">
              <legend class="text-sm font-medium text-gray-900">Spanish Speaking Customer</legend>
              <fieldset class="mt-3.5">
                <legend class="sr-only">Spanish Speaking Customer</legend>
                <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div class="flex items-center">
                    <input id="spanish" name="spanish-speaking" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="spanish" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                  </div>
                  <div class="flex items-center">
                    <input id="english" name="spanish-speaking" type="radio" checked class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="english" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                  </div>
                </div>
              </fieldset>
            </div>
  
              <div class="col-span-3 sm:col-span-full">
                <label for="Comments" class="block text-sm font-medium leading-6 text-gray-900">Comments</label>
                <div class="mt-2">
                  <textarea id="Comments" name="Comments" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">Note any additional comments here.</p>
              </div>
  
            <div class="col-span-3 sm:col-span-full">
              <legend class="text-sm font-medium text-gray-900">Confirmation Email?</legend>
              <fieldset class="mt-2">
                <legend class="sr-only">Confirmation Email</legend>
                <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div class="flex items-center">
                    <input id="yes" name="confirmation-email" type="radio" checked class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                  </div>
                  <div class="flex items-center">
                    <input id="no" name="confirmation-email" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600">
                    <label for="no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                  </div>
                </div>
              </fieldset>
            </div>
  
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <p id="quote-status"></p>
            <button type="submit" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Submit Form</button>
          </div>
        </section>
      </div>
    </form>
      <!-- end agent/dealer info -->
  </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        employeeList: [
          'Ariana',
          'Bobby',
          'Francisco',
          'Vanessa',
          'Other'
        ],
        rep: 'Other'
      }
    },
    methods: {
      updateRep (val) {
        this.rep = val
      }
    }
  }
  </script>
  