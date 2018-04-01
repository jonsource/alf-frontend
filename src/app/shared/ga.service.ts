/* Remember to put ga script into index.html just after app-root

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-xxxxxxxx-x', 'auto');  // <- add the UA-ID from your tracking code
                                            // <- remove the last line like me
</script>

*/

declare const ga: Function;

export class GAService {
	ga: Function = null

	constructor() {
		try {
			this.ga = ga;
		} catch (e) {
			console.error('[ga] Ga not defined - using dummy function.');
			console.error(e);
			this.ga = function() {};
		}
	}

	private safeCall(args: any[], desc: string = '') {
		try {
			console.log(desc);
			console.log(args);
			this.ga(...args);
		} catch (e) {
			console.error('[ga] ' + desc, e);
		}
	}

	public sendEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
		this.safeCall(
			['send', 'event', {
				eventCategory: eventCategory,
				eventLabel: eventLabel,
				eventAction: eventAction,
				eventValue: eventValue
			}],
			'sendEvent');
	}

	public setPage(page: string) {
		this.safeCall(['set', 'page', page], 'setPage');
	}

	public sendPageview() {
		this.safeCall(['send', 'pageview'], 'sendPageview');
	}
}
