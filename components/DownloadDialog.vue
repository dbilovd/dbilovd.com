<template>
	<!--Modal-->
  <div class="modal  fixed w-full h-full top-0 left-0 flex items-center justify-center"
  	:class="{ 'opacity-0 pointer-events-none': ! showingDialog }">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      
      <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      	@click.prevent="closeDialog">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <!-- <span class="text-sm">(Esc)</span> -->
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Subscribe for updates</p>
          <div class="modal-close cursor-pointer z-50"
          	@click.prevent="closeDialog">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!--Body-->
				<div class="flex flex-col">
					<p class="text-sm text-gray-700">Be the first to know when I release new music.</p>
					<form class="w-full max-w-lg my-6" method="POST" :action="subscribe.destination" id="subscription-form">
						<div class="w-full flex flex-row flex-wrap md:flex-no-wrap items-center md:border-b md:border-b-2 md:border-gray-200 py-2">
							<input type="text" placeholder="John" aria-label="First name" name="FNAME" required
								class="appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 py-1 px-2 leading-tight focus:outline-none">
							<hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1">
							<input type="text" placeholder="Doe" aria-label="Last name" name="LNAME" required
								class="appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none">
							<hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1">
							<input type="email" placeholder="you@gmail.com" aria-label="Email" name="EMAIL" required 
								class="appearance-none bg-transparent border-none w-full md:w-2/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none">
							<hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1">
						</div>
					</form>
				</div>

        <!--Footer-->
        <div class="flex justify-between pt-2">
          <a class="w-full md:w-auto block text-gray-700 hover:text-gray-700 font-semibold font-bold py-2 px-3 text-sm"
          	:href="downloadLink" target="__blank">
          	<svg class="fill-current w-3 h-4 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 20 20">
							<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
						</svg>
						<span class="">Only Download</span>
					</a>

          	<button class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center"
          		@click.prevent="subscribeAndDownload">
				<span class="">Subscribe & Download</span>
			</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
	const DownloadDialog = {
		props: {
			showingDialog: {
				type: Boolean,
				required: true,
				default: false,
			},
			downloadLink: {
				type: String,
				required: true,
				default: ''
			}
		},

		data: () => ({
			subscribe: {
				destination: 'https://dbilovd.us4.list-manage.com/subscribe/post?u=d09bba37346feb884f1d288c3&amp;id=b82fd59c83',
				firstName: '',
				lastName: '',
				email: ''
			}
		}),

		methods: {
			closeDialog () {
				this.$emit('close-dialog');
			},

			subscribeAndDownload () {
				let formElement = document.getElementById('subscription-form');
				formElement.submit();
			}
		}
	};

	export default DownloadDialog;
</script>