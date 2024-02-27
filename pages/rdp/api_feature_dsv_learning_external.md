---
title: Understanding DSV File
sidebar: rdp_sidebar
permalink: api_feature_dsv_learning.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A DSV file contains two sections - [attributes](#attributes) and [relationships](#relationships). This topic explains attributes and relationships section of a DSV file:

### Attributes

The following points must be noted regarding Attributes section in DSV file:

* Each entity in the DSV file starts with a new line. This configuration cannot be changed. 
* The first row of attributes section has attribute or property names. All the columns in this row must have a value.
* Each attribute is in one column. 
* Metadata of an entity is in one row.
* Context specific information is in separate rows.
* Nested attributes have the naming convention parent.childattribute.
* Nested attribute parent having a SeqId attribute must always accept sequence of integer numbers. It will not accept keywords such as [DELETE], [NULL]. You can delete an attribute or make an attribute value as NULL while importing DSV files to the system. If you wish to delete all nested child attributes, you can specify the [DELETE] keyword in the <<nested attribute parent name.Action>> column instead of specifying [DELETE] keyword for each nested child attribute.
* Each record of nested attribute is in a separate row. Note that each row of nested attribute also includes metadata details of the entity such as entity Id and context details. 
* The delimiter configured in the DSV profile is applicable to all the child attributes of a nested attribute.
* Locale specific attributes have the naming convention <<attribute//locale>>.
* Locale specific attributes are in separate columns.
* If an attribute that is non localizable is given a value for a specific locale other than SDL, then the value mentioned for the specific locale is considered as the value in System Default Locale (SDL). 
* If multiple contexts and locales are selected for export, then the coalesced data is exported.
* All the selected contexts and locales of the entity in the UI are exported.
* Matching attributes, Enhancer attributes of current primary context and parent primary context, and inherited data are exported by default, if specified in the profile. Note that there is no indication if the data is inherited or local.

<br/>
The following examples indicate Simple Attributes, Context Specific Attributes, Nested Attributes, Locale Specific Attributes, and Relationships in a DSV file: 

<div class="panel-group" id="accordion">
<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><b>Simple Attributes</b></a>
          </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse noCrossRef">
        <div class="panel-body"> 
        <p>The following example demonstrates a few simple attributes for sku and product entities:</p>
        {% highlight json %}
        Action,Type,ID,Name,Color,Description,Status
        ,sku,SHyt123,Chelsea Cot,Air Blue,Comfortable,New
        ,product,LmYta2,Burnley Cot,Red,Broad,Pre-Owned  
        {% endhighlight %}
          </div>
      </div>
  </div>

<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><b>Context Specific Attributes</b></a>
          </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
        <p>Consider that a sku entity "Chelsea Cot" linked to Germany and Germany Web. The following example demonstrates context specific attributes for sku entity:</p>
        {% highlight json %}
        Action,Type,ID,Name,Color,Description,Status,Country,Channel,Product classification,Coun&Chan Classifications
        ,sku,SHyt123,Chelsea Cot,Air Blue,Comfortable,New,Germany,,Product classification>>Furniture & Decor,,SHyt123
        ,,SHyt123,,,,,,Germany Web,,
        {% endhighlight %}

        Note that in this example, <b>ID</b> acts a simple and matching attribute. 
          </div>
      </div>
  </div>

<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><b>Nested Attributes</b></a>
          </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
        <p>Consider that a sku entity "Chelsea Cot" with two records for nested attribute "alternatevendor". The following example demonstrates nested attributes for sku entity:</p>
        {% highlight json %}
        Action,Type,ID,Name,Color,Alternate Vendors.SeqId,Alternate Vendors.Vendor ID,Alternate Vendors.Vendor Price,Alternate Vendors.Part Number
        ,sku,SHyt123,Chelsea Cot,Air Blue,0,abc123,100,SH12
        ,,SHyt123,,,1,xyz123,,NMR123
        {% endhighlight %}
          </div>
      </div>
  </div>

<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><b>Locale Specific Attributes</b></a>
          </h4>
      </div>
      <div id="collapseFour" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
        <p>Consider that a sku entity "Chelsea Cot" with size attributes in three different locales. The following example demonstrates locale specific attributes for sku entity:</p>
        {% highlight json %}
        Action,Type,ID,Name,Color,Size//en-US,Size//en-GB,Size//en-AU
        ,sku,SHyt123,Chelsea Cot,Air Blue,12,10,14
        {% endhighlight %}
          </div>
      </div>
  </div>
</div>

### Relationships 

The following points must be noted regarding Relationships section in DSV file:

* "Relationships" separator divides the attribute details and relationship details, if attribute details and relationship details are part of the same file.
* If relationship details of an entity are present in a separate file, there will be no "Relationships" separator.
* The first row of relationships section has relationship attributes or property names. All the columns in this row must have a value. 
* By default, all the relationship attributes or property names are exported.
* Metadata of each relationship is in one row.
* The delimiter configured in the DSV profile is applicable to all relationship attributes/ relationship attribute values.
* System will create the same entity with the relationships mentioned, if fromEntity mentioned in the Relationships section is not present in the system.
* You must ensure the related (relTo) entity is present in the system, when you import attribute details and relationship details of the entity as separate files.
* Match Attributes of "from" entity type in the relationship section are exported in separate columns. Example - FROM_ENTITY_MDM ID.
* When you download a DSV file from the user interface having an interaction locale same as the one for which a relationship is localized in the model, then the DSV file displays the localized value of the relationship. 

<br/>
The following examples indicate "Simple Attributes" and "Match Attributes of from entity type" in the Relationship section of a DSV file:

<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"><b>Simple Relationship Attributes</b></a>
          </h4>
      </div>
      <div id="collapseFive" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
        <p>The following examples demonstrates simple relationship attributes for sku to product relationship.</p>
        {% highlight json %}
        Action,Type,ID,Name,Related to Type,Relationship Id,Related to ID,Related to Name,Link Description//en-US,Priority
        ,sku@@Parent PRODUCTs,SHyt123,aircomfortmattresses014,product,ischildof_ZhNsCSUaRTOp2L,ZhNsCSUaRTOp2L,airpillow25,link test,
        ,sku@@Parent PRODUCTs,SHyt123,aircomfortmattresses014,product,ischildof_9UZVEUVATqiNo,ZhNsCSUaRTOp2L,comfortcot5,test,
        {% endhighlight %}
          </div>
      </div>
  </div>

<div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSix"><b>Match Attributes of from entity type in the Relationship Section</b></a>
          </h4>
      </div>
      <div id="collapseSix" class="panel-collapse collapse noCrossRef">
        <div class="panel-body">
        <p>The following examples demonstrates match attributes of "from" entity type for sku to product relationship. The match attributes in the following example are MDM ID and SKU Name.</p>
        {% highlight json %}
        Action,Type,ID,Name,FROM_ENTITY_MDM ID,FROM_ENTITY_SKU Name,Related to Type,Related to ID,Related to Name,Link Description//en-US,Priority
        ,sku@@Parent PRODUCTs,ers4bzpvE000NLF,aircomfortmattresses014,mdm100,Wooden Cot,product,ZhNsCSUaRTOp2L,airpillow25,link test,
        {% endhighlight %}
          </div>
      </div>
  </div>

<br/>
The following CSV illustrates a sample DSV file where attributes and relationships of an entity are in the same file:

{% highlight json %}
Action,Type,Country,Channel,Product classification,ID,SKU Name,Size//en-US,Size//en-GB,Alternate Vendors.SeqId,Alternate Vendors.Vendor Price
,sku,India,,Product classification>>Furniture & Decor,ers4bzpvE000NLF,aircomfortmattresses014,11,,0,100
,,,,,ers4bzpvE000NLF,,12,,1,200
,,,,,ers4bzpvE000NLF,,,13,2,300
,,,Germany Web,,ers4bzpvE000NLF,,12,,14,3,400
Relationships
Action,Type,ID,Name,FROM_ENTITY_MDM ID,FROM_ENTITY_SKU Name,Related to Type,Link Description//en-US,Priority
,sku@@Parent PRODUCTs,ers4bzpvE000NLF,aircomfortmattresses014,ers4bzpvE000NLF,aircomfortmattresses014,product,link test,
{% endhighlight %}