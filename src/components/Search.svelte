<script lang="ts">
  import { url } from '@utils/url-utils.ts'
  import { onMount } from 'svelte'
  import { i18n } from '@i18n/translation'
  import I18nKey from '@i18n/i18nKey'
  import Icon from '@iconify/svelte'
  
  const keywordDesktop = ''
  const keywordMobile = ''
  let result = []
  
  const results = [
    {
      url: '/',
      meta: {
        title: 'Cookies - Vilões ou Heróis?',
      },
      excerpt: 'Será que são mesmo necessários?',
    },
  ]
  
  let search = (keyword: string, isDesktop: boolean) => {}
  
  onMount(() => {
    search = async (keyword: string, isDesktop: boolean) => {
      const panel = document.getElementById('search-panel')
      if (!panel) return
  
      if (!keyword && isDesktop) {
        panel.classList.add('float-panel-closed')
        return
      }
  
      let arr = []
      if (import.meta.env.PROD) {
        const ret = await pagefind.search(keyword)
        for (const item of ret.results) {
          arr.push(await item.data())
        }
      } else {
        arr = results
      }
  
      if (!arr.length && isDesktop) {
        panel.classList.add('float-panel-closed')
        return
      }
  
      if (isDesktop) {
        panel.classList.remove('float-panel-closed')
      }
  
      result = arr
    }
  })
  
  const togglePanel = () => {
    const panel = document.getElementById('search-panel')
    panel?.classList.toggle('float-panel-closed')
  }
  
  $: search(keywordDesktop, true)
  $: search(keywordMobile, false)
  </script>
  