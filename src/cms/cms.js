import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { ServicesIndexTemplate } from '../templates/ServicesIndex'
import { ProjectsIndexTemplate } from '../templates/ProjectsIndex'
import { SingleServiceTemplate } from '../templates/SingleService'
import { SingleProjectTemplate } from '../templates/SingleProject'
import { SinglePostTemplate } from '../templates/SinglePost'
import { ProcessPageTemplate } from '../templates/ProcessPage'


if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('services-page', ({ entry }) => (
  <ServicesIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projects-page', ({ entry }) => (
  <ProjectsIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('services', ({ entry }) => (
  <SingleServiceTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projects', ({ entry }) => (
  <SingleProjectTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-process-page', ({ entry }) => (
  <ProcessPageTemplate {...entry.toJS().data} />
))

