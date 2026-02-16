<script lang="ts">
  import { Accordion } from 'bits-ui';
</script>

<div class="faq-accordion-wrapper">
  <Accordion.Root type="single" collapsible class="faq-accordion">
    <Accordion.Item value="appointment" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">How do I make an appointment?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        Please call us at (530) 758-4900 to get in touch. We'll be happy to set up an appointment to address your concerns.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="first-visit" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">What should I expect on my first visit?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        For an immediate need or an emergency, we will ask you to fill out a health form, diagnose the problem, and arrange to treat you as quickly as possible. If you need to establish continuing care, we always start with a private meeting with the dentist to determine the best way to get you started, take any necessary records – including digital x-rays and photographs – and begin the process of welcoming you as a new patient to our office.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="cost-insurance" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">How much will it cost? Do you accept my insurance?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        Nobody likes a surprise bill; we'll let you know how much you can expect to pay ahead of your dental visit. While we are not contracted with any one insurer, if you let us know your insurance information, we will file any claims on your behalf to help maximize your benefits.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="cleanings" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">How often should I come in for dental cleanings?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        We work together with you to determine your suggested interval between dental cleanings. Intervals typically are between three and six months, depending on your risk level for cavities or gum disease.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="children" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">At which age should my children start seeing the dentist?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        A child should see the dentist within six months of their first tooth coming in, or by age one. Dental issues can start early, so it's a great idea to start your child on a lifetime of healthy dental habits. We recommend very young children see a Pediatric dentist for their earliest dental visits. Pediatric dentists, much like Pediatricians, are specialists that receive extra training after dental school to meet the unique needs of children. We work closely with Pediatric dentists in the area so your whole family can receive the highest quality care.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="foods" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">Are there certain foods that help support healthy teeth?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        <p style="margin-bottom: 10px">It's not a secret that sugar isn't good for your teeth. We like to focus less on the quantity of sugar you consume, and more on how often you consume it. A sugary drink together with a meal is less damaging to your teeth than a sugary drink – like sweetened coffee, juice, milk, or soda – that you sip throughout the day.</p>
        <p style="margin-bottom: 10px">Most foods are okay in moderation, including sugar! It's just best to follow up sweets with water or mouthwash, which flushes the sugar away and allows the mouth to rebalance itself. Always wait at least 20 minutes after eating a meal or a sugary snack before brushing your teeth, so as not to abrade away healthy enamel.</p>
        <p style="margin-bottom: 10px">The healthy fats in cheese and nuts are great for your teeth. They are what we call cariostatic, which means that they help slow the growth of bacteria in the mouth.</p>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="smile" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">What is the secret to a great smile?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        Healthy gums and teeth will often lead to your best smile. However, if nature didn't give you the smile you want, we can help you attain the smile you desire.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="home-care" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">What home care do you recommend?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        Hygiene is not one-size-fits-all. With all the different tools and techniques available these days, it can be overwhelming to navigate the toothbrush aisle. We always provide oral hygiene instruction free of charge to our patients, because we want to help you get the most out of your routine.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="brush-floss" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">How often should I brush and floss?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        Ideally, you should be brushing for at least 2 minutes in the morning and in the evening (try timing yourself - this may be longer than you think!) Flossing should happen when you brush; it doesn't matter whether you brush or floss first. If you find you need to brush or floss more than this, that's fine - just make sure you're being gentle!
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="emergency" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">How will I know if I'm experiencing a true dental emergency?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        If you are experiencing trauma or swelling that is impacting your breathing, or if you have uncontrolled bleeding, you should seek help at a hospital right away. Urgent dental needs include severe tooth or jaw pain, localized gum or facial swelling, a cracked tooth, or trauma that dislodges a tooth from the mouth. Less urgent dental issues that can still be unsettling include losing a filling or crown. We can help you determine the next best course of action if you have an urgent dental problem.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="tooth-out" class="faq-item">
      <Accordion.Header>
        <Accordion.Trigger class="faq-trigger">What should I do if my tooth comes out?</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content class="faq-content">
        <p style="margin-bottom: 10px">It's normal for children to lose baby teeth from time to time, but adult teeth typically do not fall out without significant force or trauma. If your tooth is knocked out, try not to touch the root, and do not clean off any blood; there are live cells on the outside of the root that must remain alive if the tooth is to be successfully saved. If possible, place the tooth immediately in a clean glass or sandwich bag with milk. If you do not have milk, you can put the tooth in salt water solution, or hold the tooth in your mouth. Do not attempt to place the tooth back in its socket, and contact the dentist immediately. The sooner we can see you, the better the chance that the tooth can be reimplanted and saved.</p>
        <p style="margin-bottom: 10px">Keep in mind - teeth are like tiny icebergs, where the part you see in your mouth is only a fraction of the whole. The information above is only relevant if your entire tooth was knocked out, including the root; it may look like the photo below.</p>
        <img src="/images/faq/full-tooth-faq.png" alt="Full Tooth Photo" class="elizabeth-hero-photo faq-image" />
        <p style="margin-bottom: 10px">If what you see looks more like the second photo, then you may have lost a crown or a portion of your tooth, but the root structure is likely intact. While this can still be uncomfortable and an urgent issue, it is not a true dental emergency. A dislodged crown should be kept clean and dry. You can schedule an appointment with us to have it evaluated or recemented at your convenience.</p>
        <img src="/images/faq/crown-faq.png" alt="Crown Photo" class="elizabeth-hero-photo faq-image" />
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</div>

<style>
  .faq-accordion-wrapper {
    width: 100%;
  }

  .faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .faq-item {
    background-color: #FFFBEC;
    margin-bottom: 4px;
    border-radius: 8px;
    overflow: hidden;
  }

  .faq-item[data-state='open'] {
    background-color: white;
    color: var(--dark-text-color);
  }

  .faq-trigger {
    width: 100%;
    padding: 16px 20px;
    text-align: left;
    font-family: 'Hind', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    color: var(--dark-text-color);
    background: none;
    border: none;
    cursor: pointer;
  }

  .faq-content {
    padding: 0 20px 16px;
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--dark-text-color);
  }

  .faq-content :global(p) {
    margin-bottom: 10px;
  }

  .faq-image {
    max-width: 360px;
    height: auto;
    margin: 12px 0;
    border-radius: 4px;
  }
</style>
