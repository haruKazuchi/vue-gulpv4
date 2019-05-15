export function MainVisual(){
	Vue.component('main-visual',{
		props: ['title', 'text', 'button', 'link'],
		template: `
			<div class="container">
				<div class="image-box">
					<div class="image-desc">
						<div class="title" v-html="title"></div>
						<div class="text" v-html="text"></div>
						<div class="button"><a :href="link">{{button}}</a></div>
					</div>
				</div>
			</div>
		`
	})

	new Vue({
		el: '#mainvisual'
	})
}