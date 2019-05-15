export function Service(){
	Vue.component('service',{
		props: ['title', 'text', 'imgsrc'],
		template: `
			<div class="container">
				<div class="service-box">
					<div class="title" v-html="title"></div>
					<div class="text" v-html="text"></div>
				</div>
			</div>
		`
	})

	new Vue({
		el: '#service'
	})
}

