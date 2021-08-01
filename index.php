<?php

function shortcode_utm_parser_parameter( $atts ) {

    $atts = shortcode_atts(array(
        'campaign' => '',
        'product' => '',
        'type' => '',
        'targeting' => '',
        'funnel' => '',
        'site' => '',
        'ref' => '',
        'url' => '',
        'autoupsell' => '',
        'coupon' => '',
        'payslip' => '1',
        'installment' => '',
        'initials' => '',
    ),$atts,'shortcode-utm-referral-with-parameter-default');

    global $post;
    $postName = $post->post_name;

    $postId       = get_the_ID();
    $postSlug     = str_replace( '-', '_', sanitize_title_with_dashes($postName));

    $postIdentify = $postSlug . "_" . $postId;
    $conversionPeriod = date('m_Y');

    $mountUrlParse = home_url($_SERVER['REQUEST_URI']);
    $urlQueryParse = parse_url($mountUrlParse, PHP_URL_QUERY);
    parse_str($urlQueryParse, $query);

    if (isValidAtribute('utm_source')) {
        $utmSource  = "site";
    } else {
        $utmSource = $query['utm_source'];
    }

    if ( empty( $query['utm_medium'] ) && !isset( $query['utm_medium'] ) ) {
        $utmMedium  = "referral";
    } else {
        $utmMedium = $query['utm_medium'];
    }

    if ( empty( $query['utm_campaign'] ) && !isset( $query['utm_campaign'] ) ) {
        $utmCampaign  = $atts['campaign'];
    } else {
        $utmCampaign = $query['utm_campaign'];
    }

    if ( empty( $query['utm_content'] ) && !isset( $query['utm_content'] ) ) {
        $utmContent  = $postIdentify ."_no_utm_sso_". $conversionPeriod . "_" . $atts['funnel'] . "_" . $atts['targeting'] . "_" . $atts['type'];
    } else {
        $utmContent = $query['utm_content'];
    }

    if ( empty( $query['utm_term'] ) && !isset( $query['utm_term'] ) ) {
        $utmTerm  = "site_link_botao_" . $atts['site'];
    } else {
        $utmTerm = $query['utm_term'];
    }

    if ( empty( $query['a'] ) && !isset( $query['a'] ) ) {
        $ref  = $atts['ref'];
    } else {
        $ref = $query['a'];
    }

    if ( !empty($atts['autoupsell']) && isset($atts['autoupsell'])){

        if($atts['autoupsell'] === 'yes'){
            $autoUpsell = "&u=1";
        } else{
            $autoUpsell = "";
        }
    }

    if ( !empty($atts['coupon']) && isset($atts['coupon'])){
        $coupon = "&cupom=" . $atts['coupon'];
    } else {
        $coupon = "";
    }

    if ( !empty($atts['payslip']) && isset($atts['payslip'])){
        $paySlip = "&dv=" . $atts['payslip'];
    } else {
        $paySlip = "";
    }

    if ( !empty($atts['installment']) && isset($atts['installment'])){
        $installment = "&pf=" . $atts['installment'];
    } else {
        $installment = "";
    }

    $url = "https://sun.eduzz.com/" . $atts['product'] . "?a=" . $ref . $installment ."&utm_campaign=" . $utmCampaign . "&utm_source=" . $utmSource . "&utm_medium=" . $utmMedium . "&utm_content=" .$utmContent . "&utm_term=" . $utmTerm . $autoUpsell . $coupon . $paySlip;

    $noUrl = $atts['product'] . "?a=" . $ref . $installment ."&utm_campaign=" . $utmCampaign . "&utm_source=" . $utmSource . "&utm_medium=" . $utmMedium . "&utm_content=" .$utmContent . "&utm_term=" . $utmTerm . $autoUpsell . $coupon . $paySlip;

    if (!empty($atts['url']) && isset($atts['url'])){

        if($atts['url'] === 'yes'){
            echo $url;
        } else {
            echo $noUrl;
        }
    }

}

/**
 * @return bool
 */
function isValidAtribute($att)
{
    return empty($query[$att]) && !isset($query[$att]);
}

add_shortcode( 'shortcode-utm-referral-with-parameter-default', 'shortcode_utm_referral_with_parameter_default' );