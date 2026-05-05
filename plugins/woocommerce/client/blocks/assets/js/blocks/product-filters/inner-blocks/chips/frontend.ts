/**
 * External dependencies
 */
import { getContext, store } from '@wordpress/interactivity';

export type ChipsContext = {
	showAll: boolean;
};

store( 'woocommerce/product-filters', {
	actions: {
		showAllChips: () => {
			const context = getContext< ChipsContext >();
			context.showAll = true;
		},
	},
} );
