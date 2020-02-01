---
layout: main3
permalink: /series
title: "Ultimas series"
---


<main class="home" id="post" role="main" itemprop="mainContentOfPage" style="padding-top: 60px;"  itemscope="itemscope" itemtype="http://schema.org/Blog">
     <div cold-md="12" align="center">
        <h2 class="top_h3"> Series más actuales </h2>
    </div>
     <div class="row" style="display:none" id="filtros">
    <p style="color:white; font-size:17px; padding: 0px 25px 5px 25px;"> Buscar por categoria:</p>
        <div class="form-group" style="padding:  0px 25px 5px 25px;">  
                    <select name="genero_series" id="genero_series" class="form-control">
                        <option disabled selected value="">Seleccione un genéro</option>
                            <option value="/series/Terror">Terror</option>
                            <option value="/series/Ciencia-Ficcion">Ciencia Ficción</option>
                            <option value="/series/Romance">Romance</option>
                            <option value="/series/Comedia">Comedia</option>
                            <option value="/series/Animado">Animado</option>
                            <option value="/series/Erotico">Erótica</option>
                            <option value="/series/Drama">Drama</option>
                            <option value="/series/Accion">Acción</option>
                    </select>
        </div>     
   </div>
    <div id="grid" class="row flex-grid">
            {% assign post_news = site.posts  | where:"category","series"%}
                {% for post in post_news %}
                    <article class="box-item col-xs-4 col-sm-3 col-md-2 col-lg-1" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
                                <div class="box">
                                <div class="box-body">
                                    {% if post.image_carousel %}
                                        <div class="cover">
                                            <a  onclick="mostrar()" href="{{ post.url | prepend: site.baseurl }}">
                                            <img src="https://res.cloudinary.com/imbriitneysam/image/upload/v1537239672/placeholder-min.png" data-url="{{ post.image_carousel }}" class="preload">
                                            </a>
                                         
                                                {% if post.idioma == 'Latino' %}

                                                <div class="latino" title="Audio Latino"></div>


                                        {% else %}
                                                {% if post.idioma == 'Castellano' %}

                                                <div class="castellano" title="Audio Castellano"></div>

                                                {% else %}
                                                <div class="subtitulado" title="Audio Subtitulado"></div>

                                                {% endif %}

										{% endif %}
                                            <div class="titulo"> {{ post.calidad }} </div>
                                        </div>
                                    {% endif %}
                                    <div class="box-info">
                                        <div class="w3l-movie-text">
                                            <h6>
                                                <a onclick="mostrar()" class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                                                        {{ post.title }}
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                </article>
                {%endfor%}
         </div>





</main>