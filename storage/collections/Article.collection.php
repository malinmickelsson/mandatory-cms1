<?php
 return array (
  'name' => 'Article',
  'label' => '',
  '_id' => 'Article5d70029ec0cbc',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'title',
      'label' => '',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    1 => 
    array (
      'name' => 'name',
      'label' => '',
      'type' => 'collectionlink',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'Author',
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'date',
      'label' => '',
      'type' => 'date',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'post',
      'label' => '',
      'type' => 'markdown',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'iframe' => false,
        'mode' => 'split',
        'markdown' => false,
        'enablescripts' => false,
        'height' => 500,
        'maxsplitsize' => 1000,
        'codemirror' => 
        array (
        ),
        'toolbar' => 
        array (
          0 => 'bold',
          1 => 'italic',
          2 => 'strike',
          3 => 'link',
          4 => 'image',
          5 => 'blockquote',
          6 => 'listUl',
          7 => 'listOl',
        ),
        'lblPreview' => 'Preview',
        'lblCodeview' => 'HTML',
        'lblMarkedview' => 'Markdown',
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1567621790,
  '_modified' => 1567774836,
  'color' => '#A0D468',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => true,
      'entries_edit' => true,
      'entries_create' => true,
      'entries_delete' => true,
    ),
    '' => 
    array (
      'collection_edit' => true,
    ),
  ),
  'rules' => 
  array (
    'create' => 
    array (
      'enabled' => true,
    ),
    'read' => 
    array (
      'enabled' => true,
    ),
    'update' => 
    array (
      'enabled' => true,
    ),
    'delete' => 
    array (
      'enabled' => true,
    ),
  ),
  'icon' => 'post.svg',
  'contentpreview' => 
  array (
    'enabled' => false,
  ),
);