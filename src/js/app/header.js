export function Header(){
	Vue.component('header-item',{
		props: ['logo','logosrc', 'menu', 'logolink', 'menulink'],
		template: `
			<div class="container">
				<h1 class="logo"><a><img :src="logosrc" :alt="logo"></a></h1>
				<ul class="navi">
					<li v-for="(value, index) in items"><a :href="links[index]"><span>{{value}}</span></a></li>
				</ul>
			</div>
		`,
		data(){
			return {
				items : this.menu.split(","),
				links : this.menulink.split(",")
			}
		}
	})

	new Vue({
		el: '#header'
	})
}