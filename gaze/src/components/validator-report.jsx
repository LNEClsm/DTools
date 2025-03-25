import vhtml from 'vhtml';
import { ValidatorTable } from './validator-table';

/** @jsx vhtml */

export function ValidatorReport({
	info,
	validatorVersion,
	issues,
	errors,
	warnings,
	hints,
	infos,
}) {
	return (
		<div class="report">
			<h1>Validation report</h1>
			<ul>
				<li>
					<b>Format:</b> glTF {info.version}
				</li>
				<li>
					<b>Generator:</b> {info.generator}
				</li>
				{info?.extras?.title && (
					<li>
						<b>Title:</b>{' '}
						<span dangerouslySetInnerHTML={{ __html: info.extras.title }} />
					</li>
				)}
				{info?.extras?.author && (
					<li>
						<b>Author:</b>{' '}
						<span dangerouslySetInnerHTML={{ __html: info.extras.author }} />
					</li>
				)}
				{info?.extras?.license && (
					<li>
						<b>License:</b>{' '}
						<span dangerouslySetInnerHTML={{ __html: info.extras.license }} />
					</li>
				)}
				{info?.extras?.source && (
					<li>
						<b>Source:</b>{' '}
						<span dangerouslySetInnerHTML={{ __html: info.extras.source }} />
					</li>
				)}
				<li>
					<b>Stats:</b>
					<ul>
						<li>{info.drawCallCount || '0'} draw calls</li>
						<li>{info.animationCount || '0'} animations</li>
						<li>{info.materialCount || '0'} materials</li>
						<li>{info.totalVertexCount || '0'} vertices</li>
						<li>{info.totalTriangleCount || '0'} triangles</li>
					</ul>
				</li>
				<li>
					<b>Extensions:</b>
					<ul>
						{info.extensionsUsed?.length ? (
							info.extensionsUsed.map((extension) => <li>{extension}</li>)
						) : (
							<li>None</li>
						)}
					</ul>
				
				</li>
			</ul>
			<hr />

			{issues.numErrors && <ValidatorTable messages={errors} color="#f44336" title="Error" />}
			{issues.numWarnings && (
				<ValidatorTable messages={warnings} color="#f9a825" title="Warning" />
			)}
			{issues.numHints && <ValidatorTable messages={hints} color="#8bc34a" title="Hint" />}
			{issues.numInfos && <ValidatorTable messages={infos} color="#2196f3" title="Info" />}
		</div>
	);
}
