const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // 선택한 모드를 통해 webpack이 알맞은 내장 최적화를 사용
  entry: "./app/entry", // string | object | array
  // ./src 를 기본으로 함
  // 애플리케이션이 여기에서 실행되며
  // webpack이 번들링을 시작
  output: {
    // webpack이 결과를 내보내는 방법과 관련된 옵션
    path:path.resolve(__dirname, "dist"), // string (기본값)
    // 모든 출력 파일의 대상 디렉터리는
    // 반드시 절대 경로 여야함 (Node.js의 path 모듈을 사용)
    filename: "[name].js", // string (기본값)
    // the filename template for entry chunks
    publicPath: "/assets/", // string
    // HTML 페이지에 상대적으로 해석된 출력 디렉터리 URL
    library: { // 이전 구문도 제공 가능 (클릭하여 보기)
      type: "umd", // universal module definition
      // export된 library 타입
      name: "MyLibrary", // string | string[]
      // the name of the exported library

      /* 고급 output.library 설정 (클릭하여 보기) */
    },
    uniqueName: "my-application", // (기본값은 package.json "name")
    // 동일한 HTML의 다른 빌드와 충돌하지 않도록 이 빌드에 부여할 고유한 이름
    name: "my-config",
    // 출력에 표시되는 설정 이름
    /* 고급 출력 설정 (클릭하여 보기) */
    /* 전문가 출력 설정 1 (on own risk) */
    /* 전문가 출력 설정 2 (on own risk) */
  },
  module: {
    // 모듈 관련 설정
    rules: [
      // 모듈에 대한 규칙 (로더 설정, 파서 옵션 등)
      {
        // 조건:
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // 각각의 정규식 또는 문자열을 허용하는 일치 조건
        // test 및 include 동작은 동일하며 둘 다 일치해야함
        // exclude는 일치하지 않아야함 (test 및 include 보다 우선함)
        // 좋은 활용 사례:
        // - test에서 파일 이름을 찾을때만 RegExp 사용
        // - 전체 경로와 일치하도록 include 및 exclude에서 절대 경로 배열을 사용
        // - exclude 보다는 include를 사용
        // 각 조건은 조건 배열인
        // "and", "or" 또는 "not" 속성이 있는 객체도 받을 수 있음
        issuer: /\.css$/,
        issuer: path.resolve(__dirname, "app"),
        issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { not: [ /\.css$/ ] },
        issuer: [ /\.css$/, path.resolve(__dirname, "app") ], // like "or"
        // issuer 조건 (import의 출처)
        /* 고급 조건 (클릭하여 보기) */

        // 동작:
        loader: "babel-loader",
        // 적용되어야하는 로더이며 컨텍스트에 상대적으로 해석됨
        options: {
          presets: ["es2015"]
        },
        // 로더에 대한 옵션
        use: [
          // 복수의 로더와 옵션을 적용
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              // ...
            }
          }
        ],
        type: "javascript/auto",
        // 모듈 유형을 지정
        /* 고급 동작 (클릭하여 보기) */
      },
      {
        oneOf: [
          // ... (rules)
        ]
        // 중첩 규칙 중 하나만 사용
      },
      {
        // ... (conditions)
        rules: [
          // ... (rules)
        ]
        // 중첩 규칙을 모두 사용 (유용한 조건과 결합)
      },
    ],
    /* 고급 모듈 설정 (클릭하여 보기) */
  },
  resolve: {
    // 모듈 요청 해석 옵션
    // (로더 해석에는 적용되지 않음)
    modules: ["node_modules",path.resolve(__dirname, "app")],
    // 모듈을 찾을 디렉터리 (순서대로)
    extensions: [".js", ".json", ".jsx", ".css"],
    // 사용한 확장자
    alias: {
      // 모듈 이름 별칭 목록
      // 현재 컨텍스트 기준으로 별칭을 import
      "module": "new-module",
      // 별칭 "module" -> "new-module" 및 "module/path/file" -> "new-module/path/file"
      "only-module$": "new-module",
      // 별칭 "only-module" -> "new-module", 하지만 "only-module/path/file"는 제외 -> "new-module/path/file"
      "module": path.resolve(__dirname, "app/third/module.js"),
      // 별칭 "module" -> "./app/third/module.js" 과 "module/file" 은 오류 발생
      "module": path.resolve(__dirname, "app/third"),
      // 별칭 "module" -> "./app/third" 및 "module/file" -> "./app/third/file"
      [path.resolve(__dirname, "app/module.js")]: path.resolve(__dirname, "app/alternative-module.js"),
      // 별칭 "./app/module.js" -> "./app/alternative-module.js"
    },
    /* 대체 별칭 구문 (클릭하여 보기) */
    /* 고급 해석 설정 (클릭하여 보기) */
    /* 전문가 해석 설정 (클릭하여 보기) */
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // 애셋 파일 이름을 제공하는 predicate 함수
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", // enum
  // 브라우저 devtools에 대한 메타 정보를 추가하여 디버깅 향상
  // 빌드 속도는 느리나 가장 상세한 소스맵.
  context: __dirname, // string (absolute path!)
  // webpack의 홈 디렉터리
  // 엔트리와 module.rules.loader 옵션은
  // 이 디렉터리를 기준으로 해석됨
  target: "web", // enum
  // 번들이 실행되는 환경은
  // 청크 로딩 동작, 사용 가능한 외부 모듈 및
  // 생성 된 코드 스타일을 변경함
  externals: ["react", /^@angular/],
  // 모듈을 따르거나 번들로 묶지 말고 런타임시 환경에서 요청
  externalsType: "var", // (output.library.type를 기본으로 사용)
  // 외부에서 인라인으로 지정되지 않은 경우 외부 유형
  externalsPresets: { /* ... */ },
  // 외부 사전 설정
  ignoreWarnings: [/warning/],
  stats: "errors-only",
  stats: {
    // 표시되는 번들 정보를 정확하게 제어
    preset: "errors-only",
    // 통계 사전 설정

    /* 고급 전역 설정 (클릭하여 보기) */

    env: true,
    // 출력에 --env 값 포함
    outputPath: true,
    // 출력에 절대 출력 경로 포함
    publicPath: true,
    // 출력에 퍼블릭 경로 포함

    assets: true,
    // 출력에 애셋 목록 표시
    /* 고급 애셋 설정 (클릭하여 보기) */

    entrypoints: true,
    // 엔트리포인트 목록 표시
    chunkGroups: true,
    // 명명된 청크 그룹 목록 표시
    /* 고급 청크 그룹 설정 (클릭하여 보기) */

    chunks: true,
    // 출력에 청크 목록 표시
    /* 고급 청크 그룹 설정 (클릭하여 보기) */

    modules: true,
    // 출력에 모듈 목록 표시
    /* 고급 모듈 설정 (클릭하여 보기) */
    /* 전문가 모듈 설정 (클릭하여 보기) */

    /* 고급 최적화 설정 (클릭하여 보기) */

    children: true,
    // 하위 컴파일에 대한 통계 표시

    logging: true,
    // 출력에 로그 표시
    loggingDebug: /webpack/,
    // 일부 로거에 대한 디버그 유형 로그 표시
    loggingTrace: true,
    // 로그 출력에서 경고 및 오류에 대한 스택 추적 표시

    warnings: true,
    // 경고 표시

    errors: true,
    // 오류 표시
    errorDetails: true,
    // 오류에 대한 세부 정보 표시
    errorStack: true,
    // 오류에 대한 내부 스택 추적 표시
    moduleTrace: true,
    // 오류에 대한 모듈 추적 표시
    // (왜 모듈 참조가 발생했는지)

    builtAt: true,
    // 요약에 타임 스탬프 표시
    errorsCount: true,
    // 요약에 오류 수를 표시
    warningsCount: true,
    // 요약에 경고 수를 표시
    timings: true,
    // 요약에 빌드 타이밍 표시
    version: true,
    // 요약에 webpack 버전 표시
    hash: true,
    // 요약에 빌드 해시 표시
  },
  devServer: {
    proxy: { // 백엔드 개발 서버에 대한 프록시 URL
      '/api': 'http://localhost:3000'
    },
    static: path.join(__dirname, 'public'), // boolean | string | array | object, 정적 파일 위치
    compress: true, // gzip 압축 활성화
    historyApiFallback: true, // 404일때 index.html을 표시하려면 true, 복수의 경로를 적용하려면 객체
    hot: true, // hot module replacement. HotModuleReplacementPlugin에 따라 다름
    https: false, // self-signed의 경우 true, 인증 기관의 경우 객체
    // ...
  },
  experiments: {
    asyncWebAssembly: true,
    // 비동기 모듈로서의 WebAssembly (제안)
    syncWebAssembly: true,
    // 동기화 모듈로서의 WebAssembly (지원 중단됨)
    outputModule: true,
    // ESM 출력 허용
    topLevelAwait: true,
    // 모듈 평가시 await 사용 허용 (제안)
  },
  plugins: [
    // ...
  ],
  // 추가 플러그인 목록
  optimization: {
    chunkIds: "size",
    // 청크에 대한 ID 생성 방법
    moduleIds: "size",
    // 모듈 ID 생성 방법
    mangleExports: "size",
    // export 이름을 더 짧은 이름으로 변경
    minimize: true,
    // 출력 파일 최소화
    minimizer: [new CssMinimizer(), "..."],
    // 출력 파일에 사용할 최소화 도구

    /* 고급 최적화 (클릭하여 보기) */

    splitChunks: {
      cacheGroups: {
        "my-name": {
          // 특정 캐싱 동작으로
          // 모듈 그룹 정의
          test: /\.sass$/,
          type: "css/mini-extract",

          /* 고급 선택자 (클릭하여 보기) */

          /* 고급 효과 (클릭하여 보기) */
        }
      },

      fallbackCacheGroup: { /* 고급 (클릭하여 보기) */ }

      /* 고급 선택자 (클릭하여 보기) */

      /* 고급 효과 (클릭하여 보기) */

      /* 전문가 설정 (클릭하여 보기) */
    }
  },
  /* 고급 설정 (클릭하여 보기) */
  /* 고급 캐싱 설정 (클릭하여 보기) */
  /* 고급 빌드 설정 (클릭하여 보기) */
}