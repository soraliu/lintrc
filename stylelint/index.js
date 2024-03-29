module.exports = {
  'rules': {
    // --------------------- Possible errors ---------------------
    // Color
    // 禁止使用无效的16进制颜色
    'color-no-invalid-hex': true,

    // Font Family
    // 禁止重复的字体声明
    'font-family-no-duplicate-names': true,
    // 字体声明必须含有通用字体
    'font-family-no-missing-generic-family-keyword': true,

    // Function
    // 在calc函数中运算符两端需要添加空格
    'function-calc-no-unspaced-operator': true,
    // 强制渐变背景的direction属性需要添加‘to’关键字
    'function-linear-gradient-no-nonstandard-direction': true,

    // String
    // 禁止字符串内换行
    'string-no-newline': true,

    // Units
    // 禁止无法识别的单位
    'unit-no-unknown': true,

    // Property
    // 禁止无法识别的属性
    'property-no-unknown': true,

    // Keyframe
    // 禁止在keyframe的属性值中添加!important
    'keyframe-declaration-no-important': true,

    // Declaration block
    // 禁止重复的属性声明
    'declaration-block-no-duplicate-properties': true,
    // 禁止简略表达属性覆盖
    'declaration-block-no-shorthand-property-overrides': true,

    // Block
    // 禁止声明空的选择器
    'block-no-empty': true,

    // Selector
    // 禁止无法识别的伪类值 伪类：元素当前所具有的特性
    'selector-pseudo-class-no-unknown': true,
    // 禁止无法识别的为元素值 伪元素：对元素中的特定内容进行操作 ::before ::after ::selection ...
    'selector-pseudo-element-no-unknown': true,
    // 禁止无法识别的选择器
    'selector-type-no-unknown': [true, {
      ignoreNamespaces: ['/^app-/']
    }],

    // Media feature
    // 禁止无法识别的media属性值
    'media-feature-name-no-unknown': true,

    // At-rule
    // 禁止无法识别的@语法
    // 'at-rule-no-unknown': true,
    'at-rule-no-unknown': {
      'ignoreAtRules': ['mixin', 'include']
    },

    // Comment
    'comment-no-empty': true,

    // General / Sheet
    // 禁止高权重的声明在低权重的声明之前
    'no-descending-specificity': true,
    // 禁止重复import
    'no-duplicate-at-import-rules': true,
    // 禁止重复声明选择器
    'no-duplicate-selectors': true,
    // 禁止使用空的源文件
    'no-empty-source': true,
    // 禁止额外的分号
    'no-extra-semicolons': true,
    // 禁止无效的注释 //
    'no-invalid-double-slash-comments': true,


    // --------------------- Limit language features ---------------------
    // Color
    // 禁止使用命名的颜色: red, blue...
    // 'color-named': 'always-where-possible',
    // 禁止16进制颜色: #FFF
    // 'color-no-hex': 'true',

    // Function
    // 函数黑名单
    // 'function-blacklist': [],
    // 函数白名单
    // 'function-whitelist': [],
    // 禁止scheme relative url
    // 'function-url-no-scheme-relative': true,
    // url黑名单
    // 'function-url-scheme-blacklist': [],
    // url白名单
    // 'function-url-scheme-whitelist': ['/^http/'],

    // Number
    // 数字精确到小数点后三位
    'number-max-precision': 3,
    // 最小时间
    'time-min-milliseconds': 100,

    // Unit
    // 'unit-blacklist': [],
    // 'unit-whitelist': [],


    // Shorthand property
    // 禁止简写冗余
    'shorthand-property-no-redundant-values': true,

    // Value
    // 不需要添加额外的前缀
    'value-no-vendor-prefix': true,

    // Custom property
    // 自定义属性命名规则
    // 'custom-property-pattern': '',

    // Property
    // 'property-blacklist': [],
    'property-no-vendor-prefix': true,
    // 'property-whitelist': [],

    // Declaration
    // 如果可以简写的话就简写
    'declaration-block-no-redundant-longhand-properties': true,
    // 允许!important声明
    'declaration-no-important': false,
    // 'declaration-property-unit-blacklist': {
    //   '/^animation/': ['s']
    // },
    // 'declaration-property-unit-whitelist': {
    //   'font-size': ['px', 'rem', 'em']
    // },
    // 'declaration-property-value-blacklist': {
    // },
    // 'declaration-property-value-whitelist': {
    // },

    // Declaration block
    // 每行允许声明一个属性
    'declaration-block-single-line-max-declarations': 1,


    // Selector
    // 'selector-attribute-operator-blacklist': [],
    // 'selector-attribute-operator-whitelist': [],
    // 类名命名规则
    // 'selector-class-pattern': '',
    // 选择器命名规则
    // 'selector-id-pattern': '',
    'selector-max-empty-lines': 0,
    'selector-no-vendor-prefix': true,
    'selector-no-qualifying-type': true,
    'selector-max-id': 1,


    // Media feature
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,


    // General / Sheet
    // 嵌套深度不能超过4
    'max-nesting-depth': 4,
    // 禁止无法识别的动画属性值
    'no-unknown-animations': true,


    // Stylistic issues
    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    // 'font-family-name-quotes': 'always-unless-keyword',

    // Font weight
    'font-weight-notation': 'numeric',

    // Function
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'never',
    'function-whitespace-after': 'always',

    // Number
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,

    // String
    'string-quotes': 'single',

    // Length
    'length-zero-no-unit': true,

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': 'lower',

    // Value List
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // Custom property
    'custom-property-empty-line-before': ['always', {
      except: [
        'after-custom-property',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    }],

    // Property
    'property-case': 'lower',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    // Rule
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],


    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    "media-feature-parentheses-space-inside": 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Media query list
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',

    // At-rule
    'at-rule-empty-line-before': [ 'always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: ['after-comment'],
    } ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    // Comment
    'comment-empty-line-before': [ 'always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    } ],
    'comment-whitespace-inside': 'always',

    // General / Sheet
    'indentation': 2,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
  }
};
