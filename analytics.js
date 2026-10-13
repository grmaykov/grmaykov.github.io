/* Google Analytics 4: visits, section navigation and portfolio interactions. */
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
window.gtag('js',new Date());
window.gtag('config','G-EPR5D55PLH');
(function(){
  const script=document.createElement('script');
  script.async=true;
  script.src='https://www.googletagmanager.com/gtag/js?id=G-EPR5D55PLH';
  document.head.appendChild(script);
})();
/* Yandex.Metrika: manual page views for hash-based navigation. */
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
  k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=113394393','ym');
window.ym(113394393,'init',{defer:true,ssr:true,clickmap:true,ecommerce:'dataLayer',referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true,webvisor:false});
(function(){
  let previousUrl=document.referrer,lastUrl='';
  window.sitePageView=function(title){
    const url=location.href;
    if(url===lastUrl)return;
    window.ym(113394393,'hit',url,{title:title+' — Grigory Maykov',referer:previousUrl});
    // Section navigation is separate from GA's automatic page_view events.
    window.gtag('event','section_view',{section_name:title,page_location:url,page_title:document.title});
    previousUrl=url;lastUrl=url;
  };
  window.siteEvent=function(event,details){
    const params=Object.assign({},details,{page_location:location.href});
    if(event==='play_video'){
      params.video_title=details?.film||'';
      params.placement=details?.placement||'film_page';
    }
    window.gtag('event',event,params);
    window.ym(113394393,'reachGoal',event,details);
    window.ym(113394393,'params',{portfolio:{[event]:details}});
  };
  document.addEventListener('click',function(e){
    const link=e.target.closest?.('a');
    if(!link)return;
    if(link.getAttribute('href')?.startsWith('mailto:'))window.siteEvent('contact_email',{page:location.hash||'#work'});
    else if(link.classList.contains('social-link'))window.siteEvent('contact_social',{network:link.getAttribute('aria-label')});
  });
})();
